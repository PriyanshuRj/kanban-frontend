import React, { useState } from 'react'
import { Colorfilter, ArrowLeft2, Category, Message, TaskSquare, Profile2User, Setting2, AddSquare, LampOn,SearchNormal1 } from 'iconsax-react';
import { sideNav } from '../helpers/sidebar';
import { useDispatch, useSelector } from 'react-redux';
export default function Sidebar({sidebarState, setSidebarOpen}) {

  const [selectedProject, selectProject] = useState(0);
  const projectList = useSelector((state)=>state.projects.list)
  return (
    <div className={`sidebar flex flex-col w-60 border-r-2 h-screen absolute z-10 bg-white overflow-y-scroll ${!sidebarState && 'hidden'}`}>
      <div className='px-4 py-6 h-[4.4rem] flex flex-row items-center justify-between border-b-2'>
        <div className='text-md font-semibold flex flex-row items-center'>
          <Colorfilter
            size="24"
            color="#5030E5"
            variant="Bulk"
            className='mr-2'
          />
          Project M.
        </div>
        <div className='flex flex-row cursor-pointer' onClick={()=> setSidebarOpen(false)}>

          <ArrowLeft2 size="20" color="#787486" variant="Outline" className='-mr-3' />
          <ArrowLeft2 size="20" color="#787486" variant="Outline" />
        </div>
      </div>
      <div className="relative w-[26rem] flex md:hidden py-3 px-2 border-b-2">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchNormal1 size="22" color="#787486" />
        </div>
        <input type="text" id="simple-search" className="bg-[#F5F5F5] border-none text-gray-900 text-sm rounded-lg block w-full pl-10 px-2.5 h-[2.75rem] w-[26rem] focus:outline-none" placeholder="Search for anything..." required />
      </div>
      <div className='flex flex-col mx-2  border-b-2 py-4'>
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
      <div>
        <div className='flex flex-col px-2 py-4'>
          <div className='flex flex-row justify-between text-[#787486] items-center'>
            <span className='text-[0.75rem] font-bold'>MY PROJECTS</span>
            <AddSquare
              size="16"
              color="#787486"
              variant="Outline"
              className='mr-3'
            />
          </div>
          <div className='flex flex-col py-2'>
            {projectList.map((item, index) => {
              return <div key={index} onClick={() => selectProject(index)} className={`flex flex-row items-center justify-between  py-2 px-3 font-medium rounded-md ${selectedProject === index ? 'bg-[#5030E5] bg-opacity-[0.08] text-black' : 'text-[#787486]'} hover:bg-[#5030E5] hover:bg-opacity-[0.08] cursor-pointer my-1 hover:text-black`}>
                <div className='flex flex-row items-center font-medium rounded-md'>
                  <span style={{ backgroundColor: item.stateColor }} className={`w-2 h-2 rounded-full mr-2`}></span>
                  <p>{item.title}</p>
                </div>
                {selectedProject === index && <svg className='h-4' fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
                  <g>
                    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                      C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                      s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                      c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                  </g>
                </svg>}
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mb-8'>
        <span className='bg-[#F5F5F5]  h-[4.125rem] w-[4.125rem] flex items-center justify-center rounded-full relative'>
          <LampOn
            size="24"
            color="#FBCB18"
            variant="Bulk"
          />
          <svg className='absolute ' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_1_309)">
              <circle cx="30" cy="30" r="15" fill="#FCD64A" fillOpacity="0.7" />
            </g>
            <defs>
              <filter id="filter0_f_1_309" x="0" y="0"  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="17" result="effect1_foregroundBlur_1_309" />
              </filter>
            </defs>
          </svg>
        </span>
            <div className='bg-[#F5F5F5] shadow-md shadow-[#F5F5F5] border-md mx-4 rounded-2xl flex flex-col items-center p-4 px-5 pt-8 -mt-8'>
              <p className='text-[0.9rem] font-medium'>
                Thoughts Time
              </p>
              <p className='text-[0.75rem] text-center text-[#787486] mt-1'>
              We don’t have any notice for you, till then you can share your thoughts with your peers.
              </p>
              <span  className='flex items-center justify-center bg-white rounded-md py-2 w-full mt-3 text-[0.9rem] font-medium'>
                Write a message
              </span>
            </div>
      </div>
    </div>
  )
}
