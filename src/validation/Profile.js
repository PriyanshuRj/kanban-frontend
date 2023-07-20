import {  toast } from 'react-toastify';
import { addProfilePictureService, updateProfile } from '../services/userService';
import toastStyles from '../helpers/toastStyle';
export default async function validatePIP(photo){

    if(!photo){
        toast.warn('Please select a picture', toastStyles);
        return false;
    }

    const id = toast.loading("Uploading Profile Picture",toastStyles)
  
    const formData = new FormData();
    formData.append("file",photo, photo.name);
    const res = await addProfilePictureService(formData);

    if(res.status === 200){
        toast.update(id, { 
            render: "Profile Picture Updated", 
            type: "success",
            ...toastStyles,
        });
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error in updating the profile picture", 
            type: "error",
            isLoading: false,
            ...toastStyles,
        });
        return false;
    }
}