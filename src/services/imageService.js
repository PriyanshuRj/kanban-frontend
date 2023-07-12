import API_URL from "./URL";
import axios from "axios";
import headers from "./axiosClient";

export async function getImagesService(data, sectionId){
    try{
        const res = await axios.post(API_URL + `images`, data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}