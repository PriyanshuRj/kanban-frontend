import React, { useState } from 'react'
import validateSection from '../../validation/section';
import { BlockPicker } from 'react-color';
const defaultColors = ['#8BC48A', '#76A5EA', '#FFA500',  '#5030E5', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']
export default function AddSection({boardId, AddNewSection, closeSectionModal}) {

  const [title, setTitle] = useState('');
  const [color, setColor] = useState('#f47373');
  const [selectColor, setSelectColor] = useState(false)
  async function createSection(e) {
    e.preventDefault();
    closeSectionModal();
    try {
      const res = await validateSection(title,color,  boardId);
      if(res && res.data){
        AddNewSection(res.data.section)
      }
    } catch (e) {
      console.warn("error ", e);
    } 
  }
  function setBlockColor(color){
    setColor(color.hex);
  }
 
  return (
    <div className="w-96 max-w-lg px-8 pt-6 pb-8">
      <h1 className='text-center text-2xl font-semibold mb-4'>
        Add Section
      </h1>
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Title" />
        </div>
        <div className='  my-4'>
          <div className={`flex items-center justify-between w-full `}>

        <label className={`block text-gray-700 text-sm font-bold mr-8`} >
            Section Color
          </label>
          <div className='relative'>

        <div className='p-[0.4rem] border w-min rounded-md relative' onClick={()=> setSelectColor(prev=> !prev)}>
          <div className='h-6 w-12 rounded-md' style={{backgroundColor: color}} >
          </div>
        
          </div>
          <div className='' onClick={ ()=> setSelectColor(false) }>
        {selectColor && <div className='absolute top-12'>
          <BlockPicker color={color} onChange={setBlockColor} colors={defaultColors} triangle="hide" style={{position : 'absolute'}} />
        </div>
         }
        </div>
        </div>
         </div>

       
        </div>
        <div className="flex items-center justify-between">
          <button onClick={createSection} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>

  )
}
