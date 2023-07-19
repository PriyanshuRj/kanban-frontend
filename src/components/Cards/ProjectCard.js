import React from 'react'
import { Link21, Folder2 } from 'iconsax-react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setBoards } from '../../redux/features/boardSlice'
export default function ProjectCard({ card }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function navigateToProject(){
        dispatch(setBoards(card))
        navigate(`/boards/${card._id}`);
      }

    return (

        <div onClick={navigateToProject} className='shadow-lg backdrop-blur bg-opacity-50 p-4 rounded-lg border w-full my-5 md:m-4 sm:w-[45%] lg:w-[30%] cursor-pointer hover:shadow-2xl duration-100 ease-in-out'>
            <div className='flex flex-row items-center justify-between mb-4'>
                <span className='p-2 bg-[#5030E5] rounded-md bg-opacity-25'>
                    <Folder2
                        size="20"
                        color="#5030E5"
                        variant="Outline"
                    />
                </span>
                <Link21
                    size="20"
                    color="#5030E5"
                />
            </div>
            <p className='text-lg font-semibold'>{card.title}</p>


            <p className='text-sm  text-gray-500'>{card.description}</p>
        </div>
    )
}
