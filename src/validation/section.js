import {  toast } from 'react-toastify';
import { createSectionService } from '../services/sectionService';
import toastStyles from '../helpers/toastStyle';

export default async function validateSection(title, color, projectId){

    if(title.length < 2){
        toast.warn('Title should be of atlest 2 digits', toastStyles);
        return false;
    }

    const id = toast.loading("Creating Section",toastStyles)

    const res = await createSectionService({title, color}, projectId);
    
    if(res.status === 201){
        toast.update(id, { 
            render: "Section created", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error creating Section", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
    
    
    
}