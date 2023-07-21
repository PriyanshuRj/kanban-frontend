import { getImagesService } from "../services/imageService";
import {  toast } from 'react-toastify';
import toastStyles from '../helpers/toastStyle';

export async function ValidategetImages(images){

    if (!images || images.length===0) return false;
    const res = await getImagesService({images});
    if(res.status === 200){
        return res;
    }
    if(res.status !== 200){
        toast.error("Unable to load Image", toastStyles);
        return false;
    }
      
       
}