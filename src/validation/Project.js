import {  toast } from 'react-toastify';
import { createProjectService } from "../services/projectService";
import toastStyles from '../helpers/toastStyle';

export default async function validateProject(title,  description){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', toastStyles);
        return false;
    }

    const id = toast.loading("Creating Project",toastStyles)

    
    const res = await createProjectService({title,  description});
    console.log(res);
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