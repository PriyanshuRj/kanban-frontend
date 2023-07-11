import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { AddSquare } from 'iconsax-react';
import { lists } from '../../helpers/kanbarData';
import { styles } from '../../helpers/modalStyle';
import Modal from 'react-modal';
import AddSection from '../Modals/AddSection';
import AddTask from '../Modals/AddTask';
import Section from './Section';
import { useSelector } from 'react-redux';
export default function Kanban({boardId}) {
  const board = useSelector(state=>state.board.board);
  console.log(board)
  const [data, setData] = useState([]);
  const [sectionModalState, setSectionModalState] = useState(false);
  const [taskModalState, setTasknModalState] = useState(false);
  const [currentSection, setCurrentSection] = useState(data ? data: null);
  useEffect(()=>{
    if(board.sections && board.sections.length)
      setData(board.sections);
    else setData([])
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
    const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
    const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)
    const sourceCol = data[sourceColIndex]
    const destinationCol = data[destinationColIndex]

    const sourceTasks = [...sourceCol.tasks]
    const destinationTasks = [...destinationCol.tasks]

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTasks.splice(source.index, 1)
      destinationTasks.splice(destination.index, 0, removed)
      data[sourceColIndex].tasks = sourceTasks
      data[destinationColIndex].tasks = destinationTasks
    } else {
      const [removed] = destinationTasks.splice(source.index, 1)
      destinationTasks.splice(destination.index, 0, removed)
      data[destinationColIndex].tasks = destinationTasks
    }
  }
  async function addTask(section) {
    try {
      openTaskModal();
      setCurrentSection(section)
      // const newData = [...data]
      // const index = newData.findIndex(e => e.id === sectionId)
      // const task = {
      //   section: boardId + sectionId,
      //   id: sectionId + boardId + newData[index].tasks.length.toString(),
      //   position: newData[index].tasks.length.toString(),
      //   title: 'New Task',
      //   content: 'Very good task',
      //   priority: "Low",
      //   comments: 0,
      //   file: 0,
      //   assignies: [],
      //   picture: [],


      // }
      // newData[index].tasks.unshift(task)
      // setData(newData)
    } catch (err) {
      console.error('error in creating')
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

        <AddTask modalState={taskModalState} sections={data} currentSection={currentSection} closeTaskModal={closeTaskModal} />
       
        </div>
      </Modal>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-8 mr-8 min-h-[20rem]'>
          {
            data && data.map(section => (
              <div key={section.id} className='w-full bg-[#F5F5F5] rounded-xl p-4 shadow-slate-300 shadow-md  h-min min-w-[24.2rem] '>
                <Section section={section} addTask={addTask} />
              </div>
            ))
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
