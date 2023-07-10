import React from 'react'
import { SearchNormal1, Calendar2, MessageQuestion, Notification, ArrowDown2 } from 'iconsax-react';
import { useSelector } from 'react-redux';
const profilePicture = process.env.PUBLIC_URL + "/user1.png";

export default function Header() {
  const userData = useSelector((state)=> state.user.value);
  const {name, mobileno} = userData;
  return (
    <div className='flex flex-row justify-end md:justify-between h-[4.4rem] py-3 pl-8 border-b-2 pr-8'>
      <div className="relative w-[26rem] hidden md:flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchNormal1 size="22" color="#787486" />
        </div>
        <input type="text" id="simple-search" className="bg-[#F5F5F5] border-none text-gray-900 text-sm rounded-lg block w-full pl-10 px-2.5 h-[2.75rem] w-[26rem] focus:outline-none" placeholder="Search for anything..." required />
      </div>
      <div className='flex flex-row items-center'>
        <div className='hidden xl:flex flex-row items-center'>
          <Calendar2 size="24" color="#787486" className='mr-6' />
          <MessageQuestion size="24" color="#787486" className='mr-6' />
          <Notification size="24" color="#787486" className='mr-8' />
        </div>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-end items-end mr-5'>
            <p className='text-base text-[#0D062D]'>{name}</p>
            <p className='text-sm text-[#787486]'>
              {mobileno}
            </p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={profilePicture} alt="profile"/>
            <ArrowDown2 size="18" color="#292D32" className='ml-2' />
          </div>
        </div>
      </div>
    </div>
  )
}
