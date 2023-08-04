import React from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import { ArrowDown3 } from 'iconsax-react'
import { ValidateAddComment } from "../validation/Comment";

export default function Comments({ task, modalState }) {
    const [comment, setComment] = useState("");
    const [commentViewState, setCommentViewState] = useState(false);
    const [allComments, setAllComments] = useState(task.comments);
    async function updateContent(event, editor) {

        const data = editor.getData()

        if (modalState) {
            setComment(data)
        }
    }
    async function addComent(e) {
        e.preventDefault();
        const res = await ValidateAddComment(comment, task._id);
        if (res && res.status === 201) {
            console.log("Hurray");
            setAllComments([...allComments, res.data.comment])
        }
    }
    return (
        <div>
            <label className={`block text-gray-700 text-sm font-bold mb-2`} >
                Comment
            </label>
            <form>

                <div className="flex mb-2 w-full task-comment-class">
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            toolbar: ['heading', '|', 'bold', 'italic', 'underline', '|', 'undo', 'redo', '|', 'numberedList', 'link', 'insertTable', 'blockQuote']
                        }}
                        data={comment}
                        onChange={updateContent}
                        className="h-40"
                    />
                </div>
                <button type="submit" onClick={addComent} disabled={comment.length === 0} className={` ${comment.length === 0 ? "bg-indigo-300" : "bg-indigo-600 "}  py-2 px-5 rounded text-white mb-4`}>Save</button>
            </form>

            <div className='text-[#787486] flex flex-row' onClick={() => setCommentViewState(prev => !prev)}>

                View Comments
                <ArrowDown3 size="22" color="#787486" className={`ml-2 ${commentViewState && ' rotate-180 '} duration-200 ease-in-out`} />
            </div>
            <div className={`mt-4  ${commentViewState ? ' flex flex-col' : ' hidden  '} duration-200 ease-in-out`}>

                {allComments.map((comment, index) => {
                    return <div className='flex flex-col mb-4' key={index}>
                         <span className='flex flex-row w-content mr-4'>
                            <span className='mr-2 h-6 w-6 rounded-full bg-green-400 border border-2 border-green-600 flex items-center justify-center text-[0.7rem] mr-2'>
                                {comment.commenter.name.substring(0, 1)}
                            </span>
                            <p className='text-gray-500 font-semibold'>

                                {comment.commenter.name}
                            </p>
                        </span>
                        <p>
                       
                            {comment.comment && <p className="content " dangerouslySetInnerHTML={{ __html: comment.comment }} />}

                        </p>
                    </div>
                })}
            </div>
        </div>
    )
}
