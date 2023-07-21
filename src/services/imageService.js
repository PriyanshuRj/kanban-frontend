import API_URL from "./URL";
import axios from "axios";
import getHeader from "./axiosClient";

export async function getImagesService(data, sectionId){
    try{
        const res = await axios.post(API_URL + `images`, data ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}