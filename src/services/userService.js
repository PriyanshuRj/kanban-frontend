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
        if(res.data.token) localStorage.setItem("token", res.data.token);
        else localStorage.removeItem("token");
        return res;
    }
    catch(error){
        localStorage.removeItem("token");
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
export async function addProfilePictureService(data){
    try{
        headers['Content-Type'] = 'multipart/form-data'
        const res = await axios.put(URL + "profile/profilepicture",data,{
            headers : headers
        });
        return res;
    }
    catch(error){
        return [];
    }
}
export async function updateProfile(data){
    try{
        const res = await axios.put(URL + "profile",data,{
            headers : headers
        });
        return res;
    }
    catch(error){
        return [];
    }
}