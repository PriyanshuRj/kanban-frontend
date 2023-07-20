import React, { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { AddSquare } from 'iconsax-react';
import { ValidateupdatePositions } from '../../validation/Task';
import { styles } from '../../helpers/modalStyle';
import Modal from 'react-modal';
import AddSection from '../Modals/AddSection';
import AddTask from '../Modals/AddTask';
import Section from './Section';
import { useSelector } from 'react-redux';

export default function Kanban({boardId}) {
  const board = useSelector(state=>state.board.board);
  const [data, setData] = useState([]);
  const [sectionModalState, setSectionModalState] = useState(false);
  const [taskModalState, setTaskModalState] = useState(false);
  const [currentSection, setCurrentSection] = useState(data ? data: null);
  const [currentTaskData, setCurrentTaskData] = useState(null);
  useEffect(()=>{
    if(board.sections && board.sections.length){
      setData(board.sections);
    }
    else {
      setData([]);
    }
    
  },[board])
  function closeSectionModal(){
    setSectionModalState(false);
  }
  function openSectionModal(){
    setSectionModalState(true);
  }
  function closeTaskModal(){
    setTaskModalState(false);
  }
  function openTaskModal(){
    setTaskModalState(true);
  }
  async function onDragEnd({ source, destination }) {
    if (!destination) return
    var newTaskData = [...data];
    const sourceColIndex = newTaskData.findIndex(e => e.id === source.droppableId)
    const destinationColIndex = newTaskData.findIndex(e => e.id === destination.droppableId)
    const sourceCol = newTaskData[sourceColIndex]
    const destinationCol = newTaskData[destinationColIndex]

    const sourceTasks = [...sourceCol.tasks]
    const destinationTasks = [...destinationCol.tasks]

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);
      const sourceSection = {...newTaskData[sourceColIndex], tasks:sourceTasks}
      newTaskData[sourceColIndex] = sourceSection
      const destinationSection = {...newTaskData[destinationColIndex], tasks:destinationTasks}
      newTaskData[destinationColIndex] = destinationSection
      
    } else {
      const [removed] = destinationTasks.splice(source.index, 1)
      destinationTasks.splice(destination.index, 0, removed)
      const destinationSection = {...newTaskData[destinationColIndex], tasks:destinationTasks}
      newTaskData[destinationColIndex] = destinationSection
    }
    setData(newTaskData);
    ValidateupdatePositions(newTaskData[sourceColIndex].tasks,newTaskData[destinationColIndex].tasks, newTaskData[sourceColIndex]._id, newTaskData[destinationColIndex]._id);
  }
  function openAddTaskModal(section){
    setCurrentTaskData(null);
    setCurrentSection(section);
    openTaskModal();

  }
  async function addTask(task, previosSectionId) {
    try {
 
      const newData = [...data]
      if(previosSectionId == task.section){
        const index = newData.findIndex(e => e.id === task.section)
        const sourceTasks = [...newData[index].tasks].map((sectionTask)=>{
          if(sectionTask._id == task._id) return task;
          else return sectionTask;
        });
        const sourceSection = {...newData[index], tasks:sourceTasks}
        newData[index] = sourceSection

      }
      else {
        if(previosSectionId){
          const removeIndex = newData.findIndex(e => e.id === previosSectionId);
          const tasks = [...newData[removeIndex].tasks].filter((sectionTask)=> sectionTask._id != task._id);
          const section = {...newData[removeIndex], tasks:tasks}
          newData[removeIndex] = section
        }
        console.log({task})
        const index = newData.findIndex(e => e.id === task.section)
        const sourceTasks = [task, ...newData[index].tasks]
        const sourceSection = {...newData[index], tasks:sourceTasks}
        newData[index] = sourceSection;
      }
      setData(newData)
    } catch (err) {
      console.error('error in creating',err)
    }
  }
  function AddNewSection(section){
    setData([...data, section])
  }

  function openEditTask(task, section){
    setCurrentSection(section);
    setCurrentTaskData(task);
    setTaskModalState(true);
  }
  function filterTasks(taskId, sectionId){
    const newData = [...data];
    const removeIndex = newData.findIndex(e => e.id === sectionId);
    const tasks = [...newData[removeIndex].tasks].filter((sectionTask)=> sectionTask._id != taskId);
    const section = {...newData[removeIndex], tasks:tasks}
    newData[removeIndex] = section
    setData(newData)
  }
  return (
   
    <div className='flex mt-8 w-full pr-4 md:pr-10  '>
       <Modal
        isOpen={sectionModalState}
        ariaHideApp={false}
        onRequestClose={closeSectionModal}
        style={styles}
        contentLabel="Add Project Modal"
      >
        <AddSection  modalState={sectionModalState} boardId={boardId} AddNewSection={AddNewSection} />
      </Modal>
      <Modal
        isOpen={taskModalState}
        ariaHideApp={false}
        onRequestClose={closeTaskModal}
        style={styles}
        contentLabel="Add Project Modal"
      >
        <div className='relative'>

        <AddTask modalState={taskModalState} sections={data} afterAddTask={addTask} currentSection={currentSection} closeTaskModal={closeTaskModal} currentTaskData={currentTaskData}/>
       
        </div>
      </Modal>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-8 mr-8 min-h-[20rem]'>
          {
            data && data.map(section => 
              {
                return <div key={section.id} className='w-full dark:bg-gray-600 bg-[#F5F5F5] rounded-xl p-4 shadow-slate-300 dark:shadow-slate-700 shadow-md  h-min min-w-[24.2rem] '>
                <Section section={section} openAddTaskModal={openAddTaskModal} openEditTask={openEditTask} filterTasks={filterTasks}/>
              </div>
              }
            )
          }
          <div className='min-w-[26rem] flex'>

            <div onClick={openSectionModal} className='cursor-pointer bg-[#5030E5] bg-opacity-25 rounded-xl p-4 shadow-slate-300 shadow-md  h-min min-w-[24.2rem] hover:shadow-2xl duration-100 ease-in-out'>

              <div className='headerList' >

                <div className='flex flex-row items-center'>
                  <AddSquare
                    size="40" color="#5030E5" variant="Bulk" className='cursor-pointer'
                  />
                  <div className="font-medium text-[#0D062D] ml-4"
                  > Create New Section </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </DragDropContext>
    </div>
  )
}
