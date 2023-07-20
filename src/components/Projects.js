import React, {useState} from 'react'
import { Edit, TickCircle } from 'iconsax-react';

import { useDispatch, useSelector } from 'react-redux'
import {  AddSquare } from 'iconsax-react';
import { setModalState } from '../redux/features/projectSlice';
import ProjectCard from './Cards/ProjectCard';
export default function Projects() {
    const dispatch = useDispatch()
    const userData = useSelector((state)=> state.user.value);
    const projectList = useSelector((state)=>state.projects.list);
    function openModal() {
      dispatch(setModalState(true));
    }
  return (
    <div className=''>
        <div className=' flex flex-col mt-10 md:ml-10 ml-4'>
        <div className='flex flex-col md:mr-10 mr-4 justify-center'>
          <div className='flex flex-row w-full justify-between items-center'>
            <div className='flex flex-row items-center'>
              <p className='text-3xl md:text-4xl lg:text-[2.875rem] font-semibold dark:text-white'>Your Projects</p>


            </div>
            <div className='flex flex-row'>
              <div onClick={openModal} className=' cursor-pointer flex flex-row items-center text-[#5030E5] font-medium sm:mr-3'>
                <AddSquare
                  size="18"
                  color="#5030E5"
                  className='mr-2'
                  variant="Bulk"
                />
                <p >Add Project</p>
              </div>

            </div>
          </div>


        </div>
      </div>
      <div className='flex flex-col mt-10 md:mx-10 mx-4 h-full md:mb-10 mb-4'>
        {projectList.length ? 
        <div className='flex flex-row flex-wrap justify-between md:justify-start'>
        {projectList.map((card,index)=> {
          return  <ProjectCard card={card}/>
         
        })}
        </div> : 
        <div onClick={openModal} className='p-8 h-full border-[#5030E5] rounded-xl border-2 border-dashed cursor-pointer'>
          <div className='bg-[#5030E5] bg-opacity-25 rounded-xl p-8 flex justify-center  h-full items-center hover:shadow-lg hover:backdrop-blur hover:bg-opacity-50 duration-200 ease-in-out'>

            <AddSquare
              size="64"
              color="#5030E5"
              className='mr-10'
              variant="Bulk"
              />
            <div className='flex  flex-col'>
              <p className='text-3xl font-semibold mb-4'>
                Create Your First Project
              </p>
              <p className='text-gray-500 font-semibold'>
                Get Started and begin your creative journy today
              </p>
            </div>
          </div>
        </ div>
            }
      </div>
    </div>
  )
}
