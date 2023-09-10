// conversation
import API_URL from "./URL";
import axios from "axios";
import getHeader from "./axiosClient";

export async function getConversations(){
    try{

        const res = await axios.get(API_URL + `conversation` ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function getSingleConversation(userId){
    try{

        const res = await axios.get(API_URL + `conversation/ourChats?userId=${userId}` ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}
