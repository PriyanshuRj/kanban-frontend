import { loginService } from "../services/userService";
import {  toast } from 'react-toastify';
import toastStyles from '../helpers/toastStyle';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export default async function validateLogin(nameCred,  password){
    var email = null;
    var mobileNo = null;
    
    if(isValidEmail(nameCred)){
        email = nameCred;
    }
    else if(nameCred.length === 10){
        mobileNo = nameCred;
    }
    if(!email && !mobileNo){
        toast.warn('Invalid Email or mobileNo', toastStyles);
        return false;
    }

    const id = toast.loading("Logining in", toastStyles)

    const res = await loginService({email,  password, mobileNo});

    if(res.status === 200){
        toast.update(id, { 
            render: "Login Successful", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else if(res.status === 300){
        
        toast.update(id, { 
            render: "User not verified", 
            type: "warning",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
    else {
        toast.update(id, { 
            render: "login Failed", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}