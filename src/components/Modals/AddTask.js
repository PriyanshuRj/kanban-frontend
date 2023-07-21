import React, { useState, useRef, useEffect } from 'react'
import validateTask, {validateUpdateTask} from '../../validation/Task';
import {  useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CloseCircle, Calendar1, DocumentUpload } from 'iconsax-react';
import Dropdown from '../UI/DropDown';
import Calendar from '../UI/Calander';
import {  toast } from 'react-toastify';
const timeout = 500

const priorityList = [{ id: "Low", title: "Low" },
{ id: "Medium", title: "Medium" },
{ id: "High", title: "High" }
]
export default function AddTask({ sections, modalState, closeTaskModal, currentSection, afterAddTask, currentTaskData }) {
  
  const board = useSelector(state => state.board.board);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(priorityList[0])
  const [content, setContent] = useState('')
  const [deadline, setDeadline] = useState(new Date());
  const [openCalander, setOpenCalander] = useState(false);
  const [selectedSection, setSelectedSection] = useState(currentSection);
  const [taskFiles, setTaskFiles] = useState(null);

  useEffect(()=>{
    if(currentTaskData){
      setTitle(currentTaskData.title);
      setContent(currentTaskData.content);
      setDeadline(new Date(currentTaskData.deadline))
      setPriority(priorityList.find((priority)=> priority.title === currentTaskData.priority))
    }
  },[currentTaskData])
  const editorWrapperRef = useRef();
  async function createTask() {
    try {

      const position = selectedSection ? selectedSection.tasks.length : 0
      var res;
      if(!currentTaskData) res = await validateTask(title, selectedSection._id, priority.id, deadline, content, taskFiles,position );
      else res = await validateUpdateTask(title, selectedSection._id, priority.id, deadline, content, taskFiles,position, currentTaskData._id );
      if(res.status===201 || res.status===200){
        afterAddTask(res.data.task, currentTaskData ? currentTaskData.section: null)
      }
    } catch (e) {
      console.warn("error ", e);
    }
  }

  function updateEditorHeight() {
    setTimeout(() => {
      if (editorWrapperRef.current) {
        const box = editorWrapperRef.current
        box.querySelector('.ck-editor__editable_inline').style.height = (box.offsetHeight - 50) + 'px'
      }
    }, timeout)
  }
  async function updateContent(event, editor) {

    const data = editor.getData()

    if (modalState) {
      setContent(data)
    }
  }
  return (
    <div className=" px-8 pt-6 pb-8">
      <div className='mb-4 font-semibold text-lg flex justify-between'>
        <div>
          <span className='text-gray-500'>
            {board.title} /
          </span>
          <span className='ml-1 '>
            {selectedSection.title}
          </span>
        </div>
        <CloseCircle size="25" color="#36454F" variant="Bulk" onClick={closeTaskModal} />
      </div>
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
        <div className='mb-4 flex flex-row justify-between items-center'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Section
          </label>
          <Dropdown selected={selectedSection} setSelected={setSelectedSection} inputList={sections} DivWidth={"10rem"} />
        </div>
        <div className='mb-4 flex flex-row justify-between items-center'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Priority
          </label>
          <Dropdown selected={priority} setSelected={setPriority} inputList={priorityList} DivWidth={"10rem"} />
        </div>
        <div className='mb-4 flex flex-row justify-between items-center'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Deadline
          </label>
          <div className='relative'>

            <div className='w-[12rem] flex border pl-5 border-gray-300 p-2 rounded-md cursor-pointer justify-end' onClick={() => setOpenCalander(prev => !prev)}>

              {deadline.getDate() + " - " + (deadline.getMonth() + 1) + " - " + deadline.getFullYear()}
              <Calendar1
                size="25"
                color="#5030E5"
                variant="Bulk"
                className='ml-4'
              />
            </div>
            {openCalander && <div className='absolute z-10 overflow-show mt-4'>

              <Calendar selectDate={setDeadline} seletctedDate={deadline} />
            </div>}
          </div>
        </div>
        <div className="flex items-center justify-center w-full my-6">
          <label className="flex flex-col rounded-lg border-2 border-dashed w-full p-10 py-5 group text-center">
            <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">

              <div className="flex flex-auto mx-auto mb-2">
                <DocumentUpload
                  size="40"
                  color="#5030E5"
                  variant="Bulk"
                />
              </div>
              <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> files here <br /> or select a file from your computer</p>
            </div>
            <input type="file" className="hidden"
            onChange={(e) => {
              if(e.target.files[0].type.substring(0,5)==="image")  {
               if(e.target.files[0].size < 1000000) setTaskFiles(e.target.files);
               
               else toast.warn('Please select an image smaller than 1MB');
             }
             
               else toast.warn('Please select an Image');
             }}
            />
          </label>
        </div>
        <label className={`block text-gray-700 text-sm font-bold mb-2`} >
          To Do
        </label>
        <div className="flex mb-8">
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: ['heading', '|', 'bold', 'italic', 'underline', '|', 'undo', 'redo', '|', 'numberedList', 'link', 'insertTable', 'blockQuote']
            }}
            data={content}
            onChange={updateContent}
            onFocus={updateEditorHeight}
            onBlur={updateEditorHeight}
            className="h-40"
          />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={createTask} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create
          </button>
        </div>
      </form>
    </div>

  )
}
