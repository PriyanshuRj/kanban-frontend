import API_URL from "./URL";
import axios from "axios";
import getHeader from "./axiosClient";

export async function getInvite(inviteId){
    try{
        const res = await axios.get(API_URL + `invite?inviteId=${inviteId}` ,{
            headers : getHeader()
        });
        return res;
    }
    catch(error){
        return [];
    }
}

export async function replyInvite(data, inviteId){
    try{
        const res = await axios.put(API_URL + `invite?inviteId=${inviteId}`,data ,{
            headers : getHeader()
        });
        return res;
    }
    catch(error){
        return [];
    }
}

export async function sendInvite(data){
    try{
        const res = await axios.post(API_URL + `invite`,data ,{
            headers : getHeader()
        });
        return res;
    }
    catch(error){
        return [];
    }
}

