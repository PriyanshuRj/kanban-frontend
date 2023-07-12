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
import { Rings } from 'react-loader-spinner';
export default function Kanban({boardId}) {
  const board = useSelector(state=>state.board.board);
  const [data, setData] = useState([]);
  const [sectionModalState, setSectionModalState] = useState(false);
  const [taskModalState, setTasknModalState] = useState(false);
  const [currentSection, setCurrentSection] = useState(data ? data: null);

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
    setTasknModalState(false);
  }
  function openTaskModal(){
    setTasknModalState(true);
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
      const [removed] = sourceTasks.splice(source.index, 1)
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
    openTaskModal();
    setCurrentSection(section)
  }
  async function addTask(task) {
    try {
 
      const newData = [...data]
      const index = newData.findIndex(e => e.id === task.section)
      const sourceTasks = [task, ...newData[index].tasks]
      const sourceSection = {...newData[index], tasks:sourceTasks}
      newData[index] = sourceSection
      // newData[index].tasks.unshift(task)
      console.log(newData)
      setData(newData)
    } catch (err) {
      console.error('error in creating',err)
    }
  }
  function AddNewSection(section){
    setData([...data, section])
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

        <AddTask modalState={taskModalState} sections={data} afterAddTask={addTask} currentSection={currentSection} closeTaskModal={closeTaskModal} />
       
        </div>
      </Modal>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-8 mr-8 min-h-[20rem]'>
          {
            data && data.map(section => 
              {
                console.log(section)
                return <div key={section.id} className='w-full bg-[#F5F5F5] rounded-xl p-4 shadow-slate-300 shadow-md  h-min min-w-[24.2rem] '>
                <Section section={section} openAddTaskModal={openAddTaskModal}/>
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
