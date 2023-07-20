import { signupService } from "../services/userService";
import {  toast } from 'react-toastify';
import toastStyles from '../helpers/toastStyle';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export default async function validateSignup(email,  password,username, mobileno, sendMobileOTP , sendEmailOTP){
    if(password.length< 8){
        toast.warn('Password should be atleast 8',toastStyles);
        return false;
    }
    if(username.length < 2){
        toast.warn('Username should be atlest 2 units', toastStyles);
        return false;
    }
    if(mobileno.length !== 10){
        toast.warn('Mobile number should be 10 digits', toastStyles);
        return false;
    }
    if(!isValidEmail(email)){
        toast.warn('Invalid Email', toastStyles);
        return false;
    }
    const id = toast.loading("Signing in",toastStyles)

    
    const res = await signupService({email,  password,username, mobileno, sendMobileOTP , sendEmailOTP});
    console.log(res);
    if(res.status === 201){
        toast.update(id, { 
            render: "Signup Successful", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else if(res.status === 200){
        
        toast.update(id, { 
            render: "User with this email already exist", 
            type: "warning",
            isLoading: false,
            ...toastStyles
        });
        return false;
        
    }
    else {
        toast.update(id, { 
            render: "Signup Failed", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}