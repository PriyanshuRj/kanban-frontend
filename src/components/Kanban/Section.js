import React, { useState, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import TaskCard from '../Cards/TaskCard'
import { AddSquare } from 'iconsax-react';

import Loader from '../UI/Loader';
export default function Section({ section, openAddTaskModal, openEditTask, filterTasks }) {
    const { tasks } = section;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (section.tasks && section.tasks.length && section.tasks[0]._id) {
            setLoading(false);
        }
        else if (section.tasks && section.tasks.length === 0) setLoading(false);
    }, [section])

    return (
        <>
            {loading ? (
               <Loader loaderHeight="h-32" />
            ) : (
                <Droppable key={section.id} droppableId={section.id} >
                    {(provided) => (
                        <div className='headerList  '
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className='flex flex-row items-center justify-between border-b-4 pb-5 ' style={{ borderColor: section.color }}>
                                <div className='title flex flex-row items-center'>
                                    <div className='h-2 w-2 rounded-full mr-2' style={{ backgroundColor: section.secondryColor }}></div>
                                    <div className="font-medium text-[#0D062D]"
                                    > {section.title} </div>
                                    <div className='bg-[#E0E0E0] text-[#625F6D] text-xs h-5 w-5 rounded-full flex items-center justify-center font-medium ml-3'>{section.tasks ? section.tasks.length : "0"}</div>
                                </div>
                                <section>
                                    <AddSquare
                                        size="24" color={section.color} variant="Bulk" className='cursor-pointer'
                                        onClick={() => openAddTaskModal(section)} />
                                </section>
                            </span>
                            <div>
                                {tasks && 
                                    tasks.map((task, index) => (
                                        <div key={task._id}>

                                            <TaskCard task={task} index={index} section={section} openEditTask={openEditTask} filterTasks={filterTasks} />
                                        </div>
                                    ))
                                }
                            </div>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            )}
        </>
    )
}
