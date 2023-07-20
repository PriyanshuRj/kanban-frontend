import React from 'react'
import { SearchNormal1, Calendar2, MessageQuestion, Notification, ArrowDown2 } from 'iconsax-react';
import ContextMenu from './UI/ContextMenu';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/features/themeSlice';
const profilePicture = process.env.PUBLIC_URL + "/user1.png";

export default function Header() {
  const dispatch = useDispatch();
  const darkToggle = useSelector((state)=> state.theme.dark)
  const navigate = useNavigate();
  const userData = useSelector((state)=> state.user.value);

  function setBaseTheme(){
    if(localStorage.getItem("dark")){
        localStorage.removeItem("dark")
    }
    else localStorage.setItem("dark", true)
    dispatch(setTheme(!darkToggle))
}

  const {name, mobileno} = userData;
  function logout(){
    localStorage.removeItem("token");
    navigate("/");
  }
  function viewProfile(){
    navigate("/profile");
  }
  const menuList =[
    {title:"View Profile", function: viewProfile},
    {title:"Logout", function: logout, redZone:true},

  ]
  return (
    <div className='flex flex-row justify-end md:justify-between h-[4.4rem] py-3 pl-8 border-b-2 pr-8 dark:bg-gray-900 dark:text-gray-200'>
      <div className="relative w-[26rem] hidden md:flex">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchNormal1 size="22" color="#787486" />
        </div>
        <input type="text" id="simple-search" className="bg-[#F5F5F5] dark:bg-gray-700 border-none text-gray-900 dark:text-gray-200 text-sm rounded-lg block w-full pl-10 px-2.5 h-[2.75rem] w-[26rem] focus:outline-none" placeholder="Search for anything..." required />
      </div>
      <div className='flex flex-row items-center'>
        <div className='hidden xl:flex flex-row items-center'>
        <button id="theme-toggle" type="button" onClick={()=>setBaseTheme(prev => !prev)} className="mr-6 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg id="theme-toggle-dark-icon"  className={` ${darkToggle && "hidden"} w-5 h-5` } fill="" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                <svg id="theme-toggle-light-icon"className={` ${!darkToggle && "hidden"} w-5 h-5` } fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
          <Calendar2 size="24" color="#787486" className='mr-6' />
          <MessageQuestion size="24" color="#787486" className='mr-6' />
          <Notification size="24" color="#787486" className='mr-8' />
        </div>
        <ContextMenu menuList={menuList}>

        <div className='flex flex-row'>
          <div className='flex flex-col justify-end items-end mr-5'>
            <p className='text-base text-[#0D062D] dark:text-gray-200'>{name}</p>
            <p className='text-sm text-[#787486] dark:text-gray-500'>
              {mobileno}
            </p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={userData.profilePicture ? userData.profilePicture : profilePicture} className='h-10 w-10 rounded-full object-cover' alt="profile"/>
            <ArrowDown2 size="18" color="#292D32" className='ml-2' />
          </div>
        </div>
        </ContextMenu>
      </div>
    </div>
  )
}
