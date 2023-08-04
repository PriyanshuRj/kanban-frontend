import {  toast } from 'react-toastify';
import toastStyles from '../helpers/toastStyle';
import { createCommentService } from '../services/commentService';
export async function ValidateAddComment(comment, taskId){
    if(!taskId){
        toast.error("Task Not found", toastStyles);
        return false;
    }
    if(!comment.length){
        toast.error("Please add a comment first");
        return false;
    }

    const id = toast.loading("Adding Comment",toastStyles)
    const res = await createCommentService({comment}, taskId);
    if(res.status===201){
        toast.update(id, { 
            render: "Comment Added Successfully", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else {
        toast.update(id, { 
            render: "Comment Not Added", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}