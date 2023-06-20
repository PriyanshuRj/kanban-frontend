import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Message, FolderMinus, AddSquare } from 'iconsax-react';
import { lists,priorityColor } from '../helpers/kanbarData';

const boardId = '1-Mobile-App';

export default function Kanban() {

  const [data, setData] = useState(lists);

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
  async function addTask(sectionId) {
    try {

      const newData = [...data]
      const index = newData.findIndex(e => e.id === sectionId)
      const task = {
        section: boardId + sectionId,
        id: sectionId + newData[index].tasks.length.toString(),
        position: newData[index].tasks.length.toString(),
        title: 'New Task',
        content: 'Very good task',
        priority: "Low",
        comments: 0,
        file: 0,
        assignies: [],
        picture: []

      }
      newData[index].tasks.unshift(task)
      setData(newData)
    } catch (err) {
      console.error('error in creating')
    } 
  }

  return (
    <div className='flex mt-8 w-full pr-4 md:pr-10 sm:min-w-[64rem]'>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className='flex flex-col sm:flex-row justify-between w-full gap-8'>
          {
            data.map(section => (
              <div key={section.id} className='w-full bg-[#F5F5F5] rounded-xl p-4 shadow-slate-300 shadow-md  h-min'>
                <Droppable key={section.id} droppableId={section.id}>
                  {(provided) => (
                    <div className='headerList'
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <span className='flex flex-row items-center justify-between border-b-4 pb-5 ' style={{ borderColor: section.color }}>
                        <div className='title flex flex-row items-center'>
                          <div className='h-2 w-2 rounded-full mr-2' style={{ backgroundColor: section.secondryColor }}></div>
                          <div className="font-medium text-[#0D062D]"
                          > {section.title} </div>
                          <div className='bg-[#E0E0E0] text-[#625F6D] text-xs h-5 w-5 rounded-full flex items-center justify-center font-medium ml-3'>{section.tasks.length}</div>
                        </div>
                        <section>
                          <AddSquare
                            size="24" color={section.color} variant="Bulk" className='cursor-pointer'
                            onClick={() => addTask(section.id)} />
                        </section>
                      </span>
                      <div>
                        {
                          section && section.tasks && section.tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided, snapshot) => (
                                <div key={task.id}>
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.dragHandleProps}
                                    {...provided.draggableProps}
                                    sx={{
                                      cursor: snapshot.isDragging ? 'grab' : 'pointer!important'
                                    }}
                                  >
                                    <section className='flex flex-col bg-white p-4 rounded-xl my-4 shadow-slate-300 shadow'>
                                      <div className='flex flex-row justify-between'>
                                        <span style={{ color: priorityColor[task.priority]["text"], background: priorityColor[task.priority]["bg"] }} className='text-[0.75rem] py-[0.2rem] px-[0.32rem] rounded'>
                                          {task.priority}
                                        </span>
                                        <svg className='h-4' fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
                                          <g>
                                            <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                      C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                      s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                      c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                          </g>
                                        </svg>
                                      </div>
                                      <div className="headerCard"><h2 className='text-[1.1rem] text-[#0D062D] font-semibold my-1'>{task.title === '' ? 'No Title' : task.title}</h2></div>
                                      {task.content && <p className="content text-[0.75rem] text-[#787486]" dangerouslySetInnerHTML={{ __html: task.content }} />}
                                      <div className='flex flex-row justify-between gap-3'>

                                      {task.picture.map((pic, index)=>{
                                        return <img key={index} className='w-full h-auto object-fill min-w-[4rem]' src={pic} alt="task" />
                                      })}
                                      </div>
                                      <div className='flex flex-row justify-between mt-5'>
                                        <div className='flex flex-row'>
                                          {task.assignies.map((assignie, index) => {
                                            return <img className={`h-6 w-6 ${index && '-ml-2'} `} style={{ zIndex: task.assignies.length - index }} key={index.toString()} src={assignie} alt="assignie" />
                                          })}
                                        </div>
                                        <div className='flex flex-row text-[0.75rem] items-center text-[#787486]'>
                                          <div className='flex flex-row  items-center mr-3'>
                                            <Message
                                              size="16"
                                              color="#787486"
                                              variant="Outline"
                                              className='mr-1'
                                            />
                                            {task.comments} {" "} comments
                                          </div>
                                          <div className='flex flex-row  items-center'>
                                            <FolderMinus
                                              size="16"
                                              color="#787486"
                                              variant="Outline"
                                              className='mr-1'
                                            />
                                            {task.file} {" "} files
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))
                        }
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))
          }
        </div>
      </DragDropContext>
    </div>
  )
}
