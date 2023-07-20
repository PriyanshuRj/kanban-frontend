import {  toast } from 'react-toastify';
import { createProjectService, deleteProjectService } from "../services/projectService";
import toastStyles from '../helpers/toastStyle';
export default async function validateProject(title,  description){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', toastStyles);
        return false;
    }

    const id = toast.loading("Creating Project",toastStyles)

    
    const res = await createProjectService({title,  description});
    if(res.status === 201){
        toast.update(id, { 
            render: "Project created", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error creating Project", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}

export async function ValidateProjectDelete(projectId){
    if(!projectId){
        toast.warn('Please provide a correct Task ', toastStyles);
        return false;
    }
    
    const id = toast.loading("Deleting Task",toastStyles)
    const res = await deleteProjectService(projectId);
    if(res.status===200){
        toast.update(id, { 
            render: "Task Deleted Successfully", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else {
        toast.update(id, { 
            render: "Task Deleted Failed", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}