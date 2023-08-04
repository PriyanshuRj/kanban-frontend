import API_URL from "./URL";
import axios from "axios";
import getHeader from "./axiosClient";

export async function createCommentService(data, taskId){
    try{

        const res = await axios.post(API_URL + `comment?taskId=${taskId}`, data ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}
