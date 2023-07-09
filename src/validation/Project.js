import {  toast } from 'react-toastify';
import { createProjectService } from "../services/projectService";

export default async function validateProject(title,  description){

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

    const id = toast.loading("Creating Project",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    
    const res = await createProjectService({title,  description});
    console.log(res);
    if(res.status === 200){
        toast.update(id, { 
            render: "Project created", 
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
            render: "Error creating Project", 
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