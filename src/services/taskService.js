import API_URL from "./URL";
import axios from "axios";
import headers from "./axiosClient";

export async function createTaskService(data, sectionId){
    try{

        const res = await axios.post(API_URL + `task?sectionId=${sectionId}`, data ,{
            headers : {...headers, 'Content-Type':'multipart/form-data' }
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}


export async function updatePositions(data){
    try{
        const res = await axios.put(API_URL + `task/updatePositions`, data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}
export async function asigneeTaskService(data, taskId){
    try{
        const res = await axios.post(API_URL + `task/asigne?taskId=${taskId}`, data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function updateTaskService(data, taskId){
    try{

        const res = await axios.put(API_URL + `task?taskId=${taskId}`, data ,{
            headers : {...headers, 'Content-Type':'multipart/form-data' }
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}