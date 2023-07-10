import React, { useState, useRef } from 'react'
import { addProject } from '../../redux/features/projectSlice'
import validateSection from '../../validation/section';
import { useDispatch } from 'react-redux';
import { BlockPicker } from 'react-color';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CloseCircle } from 'iconsax-react';
import Dropdown from '../UI/DropDown';
const timeout = 500
const priorityList = ["Low", "Medium", "High"]
export default function AddTask({sectionId, modalState, AddNewSection}) {

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState("Low")
  const [content, setContent] = useState('')
  const editorWrapperRef = useRef();
  async function createSection() {
    try {
      
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
    

    //   task.content = data
      setContent(data)
      console.log(data)
    //   props.onUpdate(task)
    }
  }
  return (
    <div className=" px-8 pt-6 pb-8">
      <div className='mb-4 font-semibold text-lg flex justify-between'>
        <div>
            <span className='text-gray-500'>
                My Project /
            </span>
            <span className='ml-1 '>
                To Do
            </span>
        </div>
        <CloseCircle size="25" color="#36454F" variant="Bulk"/>
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
        <div className='mb-4'>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            priority
          </label>
          <Dropdown selected={priority} setSelected={setPriority} inputList={priorityList}  />
        </div>
        
        <label className={`block text-gray-700 text-sm font-bold mb-2`} >
            To Do
          </label>
        <div className="flex mb-8">
            <CKEditor
              editor={ClassicEditor}
              config={ {
                toolbar: ['heading', '|', 'bold', 'italic','underline', '|', 'undo', 'redo', '|', 'numberedList', 'link', 'insertTable', 'blockQuote' ]
              } }
              data={content}
              onChange={updateContent}
              onFocus={updateEditorHeight}
              onBlur={updateEditorHeight}
              className="h-40"
            />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={createSection} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create
          </button>
        </div>
      </form>
    </div>

  )
}
