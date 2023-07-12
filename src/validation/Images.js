import { getImagesService } from "../services/imageService";
import {  toast } from 'react-toastify';

export async function ValidategetImages(images){
    if (images.length==0) return false;
    const res = await getImagesService({images});
    if(res.status === 200){
        return res;
    }
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