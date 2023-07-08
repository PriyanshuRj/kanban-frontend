import axios from 'axios';
import URL from './URL';
import headers from './axiosClient';

export async function signupService(data){
    try{
        console.log(data)
        const res = await axios.post(URL + "signup",data);
        return res;
    }
    catch(error){
        console.log(error)
        return [];
    }
}

export async function loginService(data){
    try{
        const res = await axios.post(URL + "login",data);
        return res;
    }
    catch(error){
        return [];
    }
}

export async function getProfileService(){
    try{
        const res = await axios.get(URL + "profile",{
            headers : headers
        });
        return res;
    }
    catch(error){
        return [];
    }
}