import {  toast } from 'react-toastify';
import { createTaskService, updatePositions, asigneeTaskService, updateTaskService } from '../services/taskService';
import toastStyles from '../helpers/toastStyle';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export default async function validateTask(title, sectionId, priority, deadline, content, taskImages,position){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', toastStyles);
        return false;
    }

    const id = toast.loading("Creating Task",toastStyles)

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
    

    const res = await createTaskService(formData, sectionId);
    if(res.status === 201){
        toast.update(id, { 
            render: "Task Added Successfully", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error creating Task", 
            type: "error",
            isLoading: false,
            ...toastStyles
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
            toast.error("Unable to update Positions", toastStyles);
            return false;
        }     
}

export async function ValidateAsigneTask(asignee, taskId){

    if(!isValidEmail(asignee)){
        toast.warn('Please select a User ', toastStyles);
        return false;
    }
    const res = await asigneeTaskService({asignee}, taskId);
    if(res.status === 200){
        return res;
    }
    else {
        toast.error('Asigning Task Failed', toastStyles);
        return false;
    }
}

export async function validateUpdateTask(title, sectionId, priority, deadline, content, taskImages,position,taskId){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', toastStyles);
        return false;
    }

    const id = toast.loading("Creating Task",toastStyles)

    const formData = new FormData();
    formData.append("title",title);
    formData.append("priority",priority);
    formData.append("content",content);
    formData.append("destinationSectionId",sectionId);
    formData.append("deadline",deadline);
    formData.append("position",position);
    if(taskImages) 
        for (const image of taskImages) {
            formData.append("files",image,image.name);
        }
    

    const res = await updateTaskService(formData, taskId);
    if(res.status === 200){
        toast.update(id, { 
            render: "Task Updated Successfully", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error updating Task", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}