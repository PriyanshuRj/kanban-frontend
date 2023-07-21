import React, { useState } from 'react'
import { CloseCircle, Calendar1 } from 'iconsax-react';
import { useSelector } from 'react-redux';
import { priorityColor } from '../../helpers/kanbarData';
import { Edit, TickCircle } from 'iconsax-react';
import Dropdown from '../UI/DropDown';
import { ValidateAsigneTask } from '../../validation/Task';

const loader = process.env.PUBLIC_URL + "/loading.svg";

export default function ViewTask({ task, section, closeTaskModal, taskImages, updateTask }) {
    const [asignee, setAsignee] = useState(task.assignies.length ? {...task.assignies[0], title: task.assignies[0].name} : { title: 'No One Assigned' });
    const [selectAsignee, setSelectAsignee] = useState(false);
    const board = useSelector((state) => state.board.board)
    const membersList = board.members.map((member) => { return { ...member, title: member.name } })
    const { title, content, priority } = task;
    const deadline = new Date(task.deadline);
    function asignTask(){
        ValidateAsigneTask(asignee.email, task._id);
        setSelectAsignee(false);
    }
    function openSetectAsignee(){
        setSelectAsignee(true);
    }
    return (
        <div className=" px-8 pt-6 pb-8 min-w-[32rem] max-w-[40rem] ">
            <div className='mb-4 font-semibold text-lg flex justify-between text-sm'>
                <div>
                    <span className='text-gray-500'>
                        {board.title} /
                    </span>
                    <span className='ml-1 '>
                        {section.title}
                    </span>
                </div>
                <CloseCircle size="25" color="#36454F" variant="Bulk" onClick={closeTaskModal} />
            </div>
            <div className="mb-4 flex justify-between items-center">

                <div className="headerCard"><h2 className='text-3xl text-[#0D062D] font-semibold my-2'>{title}</h2></div>
                <Edit
                    size="25"
                    color="#787486"
                    variant="Outline"
                    onClick={updateTask}
                />
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <p className="block text-gray-500 text-sm font-medium  " >
                    Section
                </p>
                {section.title}
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <p className="block text-gray-500 text-sm font-medium " >
                    Priority
                </p>
                <span style={{ color: priorityColor[priority]["text"], background: priorityColor[priority]["bg"] }} className='text-[1rem] py-1 px-2 rounded'>
                    {priority}
                </span>
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <p className="block text-gray-500 text-sm font-medium " >
                    Asignee
                </p>
                <div className=''>

                    {!selectAsignee ? <div className='flex flex-row items-center cursor-pointer' onDoubleClick={openSetectAsignee}>
                    {asignee.name &&  
                    <div className='mr-2 h-8 w-8 rounded-full bg-blue-400 border border-2 border-blue-600 flex items-center justify-center'>
                        {asignee.name.substring(0,1)}
                        </div>
                    }
                     {asignee.title} </div> :<div className=' flex pl-5 border-gray-300 p-2 rounded-md cursor-pointer justify-end' >
                        <Dropdown selected={asignee} setSelected={setAsignee} inputList={membersList} DivWidth={"16rem"} />
                        <div className='bg-[#5030E5] p-2 rounded-xl flex justify-center items-center ml-2' onClick={asignTask} >
                            <TickCircle
                                size="22"
                                color="white"
                                
                            />
                        </div>
                    </div>}

                </div>
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <p className="block text-gray-500 text-sm font-medium " >
                    Deadline
                </p>
                <div className=''>

                    <div className='w-[12rem] flex pl-5 border-gray-300 p-2 rounded-md cursor-pointer justify-end' >
                        {deadline.getDate() + " - " + (deadline.getMonth() + 1) + " - " + deadline.getFullYear()}
                        <Calendar1
                            size="25"
                            color="#5030E5"
                            variant="Bulk"
                            className='ml-4'
                        />
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center w-full my-6">
                <div className='flex flex-row justify-between gap-3'>

                    {taskImages.map((pic, index) => {
                        return <img key={index} className={`w-full h-auto object-fill min-w-[4rem] rounded-2xl ${!(pic.substring(0, 4) === "data") && " h-[8rem]"}`} src={pic.substring(0, 4) === "data" ? pic : loader} alt="task" />
                    })}
                </div>
            </div>
            <p className={`block text-gray-500 text-sm font-medium  mb-2`} >
                To Do
            </p>
            <div className="flex mb-8">
                {content && <p className="content text-[0.75rem] text-[#787486]" dangerouslySetInnerHTML={{ __html: content }} />}
            </div>

        </div>
    )
}
