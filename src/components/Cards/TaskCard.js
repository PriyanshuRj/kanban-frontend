import { Draggable } from 'react-beautiful-dnd'
import React, { useState, useEffect } from 'react'
import { Message, FolderMinus } from 'iconsax-react';
import { ValidategetImages } from '../../validation/Images';
import { ValidateDeleteTask } from '../../validation/Task';
import { priorityColor } from '../../helpers/kanbarData'
import ViewTask from '../Modals/Task';
import Modal from 'react-modal';
import { styles } from '../../helpers/modalStyle';
import ContextMenu from '../UI/ContextMenu';
const loader = process.env.PUBLIC_URL + "/loading.svg";

export default function TaskCard({ task, index, section, openEditTask, filterTasks }) {

    const [taskImages, setTaskImages] = useState(task.taskImages);
    const [taskViewModal, setTaskViewModal] = useState(false);
    async function getTaskImages() {
        const res = await ValidategetImages(task.taskImages);
        if (res) {
            setTaskImages(res.data.images);
        }
    }
    function openTaskView() {
        setTaskViewModal(true);

    }
    function closeTaskModal() {
        setTaskViewModal(false);
    }
    async function deleteTask() {
        const res = await ValidateDeleteTask(task._id);
        if (res)
            filterTasks(task._id, section._id);
    }
    function updateTask() {
        closeTaskModal();
        openEditTask(task, section);
    }
    const menuList = [
        { title: "View Task", function: openTaskView },
        { title: "Update Task", function: updateTask },
        { title: "Delete Task", function: deleteTask, redZone: true },

    ]
    useEffect(() => {
        getTaskImages();
    }, [task, getTaskImages])
    return (
        <>
            <Modal
                isOpen={taskViewModal}
                ariaHideApp={false}
                onRequestClose={closeTaskModal}
                style={styles}
                contentLabel="Add Project Modal"
            >
                <ViewTask updateTask={updateTask} closeTaskModal={closeTaskModal} task={task} section={section} taskImages={taskImages} modalState={taskViewModal} />
            </Modal>
            <Draggable key={task._id} draggableId={task.id} index={index}>
                {(provided, snapshot) => {
                    return <div key={task.id} className=' dark:text-white '>
                        <div
                            className='cursor-pointer'
                            style={{ cursor: 'pointer!important' }}
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            sx={{
                                cursor: snapshot.isDragging ? 'grab' : 'pointer!important'
                            }}
                        >
                            <section className='cursor-pointer flex flex-col bg-white p-4 rounded-xl my-4 shadow-slate-300 dark:shadow-slate-700 shadow dark:bg-gray-900 dark:text-white'>
                                <div className='flex flex-row justify-between'>
                                    <span style={{ color: priorityColor[task.priority]["text"], background: priorityColor[task.priority]["bg"] }} className='text-[0.75rem] py-[0.2rem] px-[0.32rem] rounded'>
                                        {task.priority}
                                    </span>
                                    <ContextMenu menuList={menuList}>
                                        <svg className='h-4 dark:fill-gray-400 focus:outline-none focus:border-none' fill="" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
                                            <g>
                                                <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                      C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                      s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                      c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                                            </g>
                                        </svg>
                                    </ContextMenu>
                                </div>
                                <div className="headerCard"><h2 className='text-[1.1rem]  dark:text-white text-[#0D062D] font-semibold my-1'>{task.title === '' ? 'No Title' : task.title}</h2></div>
                                {task.content && <p className="content text-[0.75rem] text-[#787486]  dark:text-gray-400 mb-2" dangerouslySetInnerHTML={{ __html: task.content }} />}
                                <div className='flex flex-row justify-between gap-3'>

                                    {taskImages.map((pic, index) => {
                                        return <img key={index} className={`w-full h-auto object-fill min-w-[4rem] rounded-2xl ${!(pic.substring(0, 4) === "data") && " h-[8rem]"}`} src={pic.substring(0, 4) === "data" ? pic : loader} alt="task" />
                                    })}
                                </div>
                                <div className='flex flex-row justify-between mt-5'>
                                    <div className='flex flex-row'>
                                        {task.assignies && task.assignies.map((assignie, index) => {
                                            return <div className='mr-2 h-6 w-6 rounded-full bg-blue-400 border border-2 border-blue-600 flex items-center justify-center text-sm'>
                                                {assignie.name.substring(0, 1)}
                                                {/* <img className={`h-6 w-6 ${index && '-ml-2'} `} style={{ zIndex: task.assignies.length - index }} key={index.toString()} src={assignie} alt="assignie" /> */}
                                            </div>
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
                                            {task.comments.length} {" "} comments
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
                }}
            </Draggable>
        </>
    )
}
