import API_URL from "./URL";
import axios from "axios";
import headers from "./axiosClient";

export async function createTaskService(data, sectionId){
    try{
        headers['Content-Type'] = 'multipart/form-data'
        const res = await axios.post(API_URL + `task?sectionId=${sectionId}`, data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}