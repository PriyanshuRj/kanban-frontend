import React,{useState} from 'react'
import Layout from '../layout/Layout'
import { useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link1, AddSquare, Filter, ArrowDown2, Calendar1, Profile2User, Pause, Menu } from 'iconsax-react';

export default function Dashboard() {
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
              <p className='text-3xl md:text-4xl lg:text-[2.875rem] font-semibold'>Your Projects</p>
            
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row items-center text-[#5030E5] font-medium sm:mr-3'>
                <AddSquare
                  size="18"
                  color="#5030E5"
                  className='mr-2'
                  variant="Bulk"
                />
                <p>Add Project</p>
              </div>
             
            </div>
          </div>
        
       
        </div>
      </div>
    </Layout>
  )
}
