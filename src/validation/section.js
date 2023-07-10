import {  toast } from 'react-toastify';
import { createSectionService } from '../services/sectionService';
export default async function validateSection(title, color, projectId){

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

    const id = toast.loading("Creating Section",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    
    const res = await createSectionService({title, color}, projectId);
    console.log(res);
    if(res.status === 201){
        toast.update(id, { 
            render: "Section created", 
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
            render: "Error creating Section", 
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