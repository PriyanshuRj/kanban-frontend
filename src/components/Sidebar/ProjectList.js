import React, {useState} from 'react'
import { AddSquare } from 'iconsax-react'
import { useDispatch, useSelector } from 'react-redux';
import { setModalState } from '../../redux/features/projectSlice';
import sidebarColor from '../../utils/sidebarColor';
import {  useParams,useNavigate } from 'react-router-dom'
import { setBoards } from '../../redux/features/boardSlice';
import { Link } from 'react-router-dom';
export default function ProjectList() {
    const navigate = useNavigate();
    const projectList = useSelector((state)=>state.projects.list);
    const dispatch = useDispatch();
    const { boardId } = useParams()
    function openModal(){
      dispatch(setModalState(true));
    }
    function navigateToProject(project){
      console.log("Called")
      dispatch(setBoards(project))
      navigate(`/boards/${project._id}`);
    }
  return (
    <div>
    <div className='flex flex-col px-2 py-4'>
      <div className='flex flex-row justify-between text-[#787486] items-center'>
        <span className='text-[0.75rem] font-bold'>MY PROJECTS</span>
        <AddSquare
          size="16"
          color="#787486"
          variant="Outline"
          className='mr-3'
          onClick={openModal}
          
        />
      </div>
      <div className='flex flex-col py-2'>
        {projectList.map((item, index) => {
          return <div key={index} onClick={()=>navigateToProject(item)} className={`flex flex-row items-center justify-between  py-2 px-3 font-medium rounded-md ${boardId === item._id ? 'bg-[#5030E5] bg-opacity-[0.08] text-black' : 'text-[#787486]'} hover:bg-[#5030E5] hover:bg-opacity-[0.08] cursor-pointer my-1 hover:text-black`}>
            <div className='flex flex-row items-center font-medium rounded-md'>
              <span style={{ backgroundColor: item.stateColor ? item.stateColor : sidebarColor[index%sidebarColor.length] }} className={`w-2 h-2 rounded-full mr-2`}></span>
              <p>{item.title}</p>
            </div>
            {boardId === item._id && <svg className='h-4' fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 32.055 32.055">
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
  )
}
