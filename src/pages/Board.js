import React,{useState} from 'react'
import Kanban from '../components/Kanban'
import Layout from '../layout/Layout'
import { useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link1, AddSquare, Filter, ArrowDown2, Calendar1, Profile2User, Pause, Menu } from 'iconsax-react';
const user1Pic = process.env.PUBLIC_URL + "/user1.png";
const user2Pic = process.env.PUBLIC_URL + "/user2.png";
const user3Pic = process.env.PUBLIC_URL + "/user3.png";
const user4Pic = process.env.PUBLIC_URL + "/user4.png";


export default function Board() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { boardId } = useParams()
  const [viewTyle, setViewType] = useState("list");
  return (
    <Layout>
      <div className='flex flex-col mt-10 md:ml-10 ml-4'>
        <div className='flex flex-col md:mr-10 mr-4 justify-center'>
          <div className='flex flex-row w-full justify-between items-center'>
            <div className='flex flex-row items-center'>
              <p className='text-3xl md:text-4xl lg:text-[2.875rem] font-semibold'>Mobile App</p>
              <div className='w-6 h-6 rounded-md bg-[#5030E5] bg-opacity-[0.2] flex justify-center items-center ml-4'>
                <svg className='h-[0.8rem] w-[0.8rem]' viewBox="5 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_611)">
                    <path d="M13.1375 1.80001L6.64998 8.28751C6.39998 8.53751 6.16249 9.02501 6.11249 9.37501L5.76249 11.85C5.63749 12.75 6.26249 13.375 7.16249 13.25L9.63746 12.9C9.98746 12.85 10.475 12.6125 10.725 12.3625L17.2125 5.87501C18.325 4.76251 18.8625 3.46251 17.2125 1.81251C15.5625 0.150005 14.2625 0.675007 13.1375 1.80001Z" stroke="#5030E5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.2125 2.72501C12.7625 4.68751 14.3 6.23751 16.275 6.78751" stroke="#5030E5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_611" x="0.99675" y="0.00210571" width="22.0115" height="22.0136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_611" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_611" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className='w-6 h-6 rounded-md bg-[#5030E5] bg-opacity-[0.2] flex justify-center items-center ml-[0.75rem]'>
                <Link1
                  size="16"
                  color="#5030E5"
                  className='drop-shadow-md'
                />
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row items-center text-[#5030E5] font-medium sm:mr-3'>
                <AddSquare
                  size="18"
                  color="#5030E5"
                  className='mr-2'
                  variant="Bulk"
                />
                <p>Invite</p>
              </div>
              <div className='hidden sm:flex flex-row'>
                <img src={user1Pic} alt="user" />
                <img src={user2Pic} alt="user" className='-ml-4' />
                <img src={user3Pic} alt="user" className='-ml-4' />
                <img src={user4Pic} alt="user" className='-ml-4' />
                <div className='-ml-4 h-[2.375rem] w-[2.375rem] rounded-full bg-[#F4D7DA] text-[#D25B68] text-[0.9rem] flex justify-center items-center border border-white' >+2</div>
              </div>
            </div>
          </div>
          <div className='flex flex-row w-full justify-between items-center mt-8'>
            <div className='flex flex-row items-center'>
              <div className='border-[#787486] border  cursor-pointer rounded-md px-3 py-[0.45rem] text-[#787486] text-medium flex flex-row items-center'>
                <Filter
                  size="16"
                  color="#787486"
                  className='drop-shadow-md md:mr-2'
                />
                <span className='hidden md:flex'>

                Filter
                </span>
                <ArrowDown2
                  size="16"
                  color="#787486"
                  className='drop-shadow-md ml-3 mr-1 hidden md:flex'
                />
              </div>
              <div className='ml-3  border-[#787486] border cursor-pointer rounded-md px-3 py-[0.45rem] text-[#787486] text-medium flex flex-row items-center'>
                <Calendar1
                  size="16"
                  color="#787486"
                  className='drop-shadow-md md:mr-2'
                />
                <span className='hidden md:flex'>

                Today
                </span>
                <ArrowDown2
                  size="16"
                  color="#787486"
                  className='drop-shadow-md ml-3 mr-1 hidden md:flex'
                />
              </div>
            </div>
            <div className='flex flex-row items-center'>
              <div className='border-[#787486] border cursor-pointer rounded-md px-3 py-[0.45rem] text-[#787486] text-medium flex flex-row items-center text-[0.8rem]'>
                <Profile2User
                  size="16"
                  color="#787486"
                  className='drop-shadow-md sm:mr-2'
                />
                <span className='hidden sm:flex'>
                Share
                </span>
              </div>
              <div className='h-8 w-0 border mx-4'>
              </div>
              <div className='flex flex-row items-center'>
                <div onClick={()=>setViewType("list")} className={`h-8 w-8 ${viewTyle==="list" && "bg-[#5030E5]" }  rounded-md flex justify-center items-center cursor-pointer`}>
                  <Pause
                    size="16"
                    color={`  ${viewTyle==="grid" ? "#787486" : 'white'} `}
                    className=' rotate-90'
                    variant="Bold"
                  />
                </div>
                <div onClick={()=>setViewType("grid")} className={`h-8 w-8 ${viewTyle==="grid" && "bg-[#5030E5]" } ml-2 rounded-md flex justify-center items-center cursor-pointer`}>
                  <Menu
                    size="16"
                    color={`  ${viewTyle==="grid" ? "white" : '#787486'} `}
                    className=' rotate-90'
                    variant="Bold"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' overflow-x-scroll'>
        <Kanban/>
        </div>
      </div>
    </Layout>
  )
}
