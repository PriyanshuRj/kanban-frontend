import { loginService } from "../services/userService";
import {  toast } from 'react-toastify';
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
        toast.warn('Invalid Email or mobileNo', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        return false;
    }

    const id = toast.loading("Logining in",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    
    const res = await loginService({email,  password, mobileNo});
    console.log(res);
    if(res.status === 200){
        toast.update(id, { 
            render: "Login Successful", 
            type: "success",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        return res;
    }
    else if(res.status === 300){
        
        toast.update(id, { 
            render: "User not verified", 
            type: "warning",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        return false;
        
    }
    else {
        toast.update(id, { 
            render: "login Failed", 
            type: "error",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        return false;
    }
    
    
    
}