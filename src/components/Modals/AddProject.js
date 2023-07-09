import React, { useState } from 'react'
import { addProject } from '../../redux/features/projectSlice'
import validateProject from '../../validation/Project';
import { useDispatch } from 'react-redux';
export default function AddProject() {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function createProject() {
    try {
      const res = await validateProject(title, description);
      if(res && res.data){
        dispatch(addProject(res.data.project))
      }
    } catch (e) {
      console.warn("error ", e);
    } 
  }

  return (
    <div className="w-96 max-w-lg px-8 pt-6 pb-8">
      <h1 className='text-center text-2xl font-semibold mb-4'>
        Add Project
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
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="Description" placeholder="Write Down the Description" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={createProject} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create
          </button>
        </div>
      </form>
    </div>

  )
}
