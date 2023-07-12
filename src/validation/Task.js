import {  toast } from 'react-toastify';
import { createTaskService, updatePositions } from '../services/taskService';
export default async function validateTask(title, sectionId, priority, deadline, content, taskImages,position){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return false;
    }

    const id = toast.loading("Creating Task",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    const formData = new FormData();
    formData.append("title",title);
    formData.append("priority",priority);
    formData.append("content",content);
    formData.append("sectionId",sectionId);
    formData.append("deadline",deadline);
    formData.append("position",position);
    if(taskImages) 
        for (const image of taskImages) {
            formData.append("files",image,image.name);
        }
    
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }
    const res = await createTaskService(formData, sectionId);
    console.log(res);
    if(res.status === 201){
        toast.update(id, { 
            render: "Task Added Successfully", 
            type: "success",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error creating Task", 
            type: "error",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        return false;
    }
}

export async function ValidateupdatePositions(resourceList,
    destinationList,
    resourceSectionId,
    destinationSectionId){
        const res = await updatePositions({resourceList,
            destinationList,
            resourceSectionId,
            destinationSectionId});
        if(res.status !== 200){
            toast.error("Unable to update Positions", { 
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
      
       
}