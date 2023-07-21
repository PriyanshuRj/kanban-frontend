import React from 'react'
import { Colorfilter, ArrowLeft2, Category, Message, TaskSquare, Profile2User, Setting2,SearchNormal1 } from 'iconsax-react';
import ProjectList from './ProjectList';
import ThoughtTime from '../UI/ThoughtTime';
import { Link } from 'react-router-dom';
export default function Sidebar({sidebarState, setSidebarOpen}) {


  return (
    <div className={`sidebar flex flex-col w-60 dark:border-gray-600 border-r-2 h-screen absolute z-10 dark:bg-gray-900 dark:text-gray-200 bg-white overflow-y-scroll ${!sidebarState && 'hidden'}`}>
      <div  className='px-4 py-6 h-[4.4rem] flex flex-row items-center justify-between border-b-2 dark:border-gray-600'>
        <Link to="/dashboard" className='text-md font-semibold flex flex-row items-center'>
          <Colorfilter
            size="24"
            color="#5030E5"
            variant="Bulk"
            className='mr-2'
          />
          Project M.
        </Link>
        <div className='flex flex-row cursor-pointer' onClick={()=> setSidebarOpen(false)}>

          <ArrowLeft2 size="20" color="#787486" variant="Outline" className='-mr-3' />
          <ArrowLeft2 size="20" color="#787486" variant="Outline" />
        </div>
      </div>
      <div className="relative w-[26rem] flex md:hidden py-3 px-2 border-b-2 dark:border-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchNormal1 size="22" color="#787486" />
        </div>
        <input type="text" id="simple-search" className="dark:bg-gray-900 bg-[#F5F5F5] border-none text-gray-900 text-sm rounded-lg block w-full pl-10 px-2.5 h-[2.75rem] w-[26rem] focus:outline-none" placeholder="Search for anything..." required />
      </div>
      <div className='flex flex-col mx-2  border-b-2 py-4 dark:border-gray-600'>
        <div className='flex flex-row items-center my-1 px-2 py-2 text-[#787486] hover:bg-[#5030E5] hover:bg-opacity-[0.08] rounded-lg cursor-pointer font-medium'>
          <Category
            size="24"
            color="#787486"
            variant="Outline"
            className='mr-3'
          />
          <span >Home</span>
        </div>
        <div className='flex flex-row items-center my-1 px-2 py-2 text-[#787486] hover:bg-[#5030E5] hover:bg-opacity-[0.08] rounded-lg cursor-pointer font-medium'>
          <Message
            size="24"
            color="#787486"
            variant="Outline"
            className='mr-3'
          />
          <span>Message</span>
        </div>
        <div className='flex flex-row items-center my-1 px-2 py-2 text-[#787486] hover:bg-[#5030E5] hover:bg-opacity-[0.08] rounded-lg cursor-pointer font-medium'>
          <TaskSquare
            size="24"
            color="#787486"
            variant="Outline"
            className='mr-3'
          />
          <span>Tasks</span>
        </div>
        <div className='flex flex-row items-center my-1 px-2 py-2 text-[#787486] hover:bg-[#5030E5] hover:bg-opacity-[0.08] rounded-lg cursor-pointer font-medium'>
          <Profile2User
            size="24"
            color="#787486"
            variant="Outline"
            className='mr-3'
          />
          <span>Members</span>
        </div>
        <div className='flex flex-row items-center my-1 px-2 py-2 text-[#787486] hover:bg-[#5030E5] hover:bg-opacity-[0.08] rounded-lg cursor-pointer font-medium'>
          <Setting2
            size="24"
            color="#787486"
            variant="Outline"
            className='mr-3'
          />
          <span>Setting</span>
        </div>
      </div>
     <ProjectList />
     <ThoughtTime />
    </div>
  )
}
