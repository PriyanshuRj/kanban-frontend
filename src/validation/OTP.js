import { SubmitEmailOTPService } from "../services/OTPService";
import {  toast } from 'react-toastify';
import toastStyles from '../helpers/toastStyle';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export default async function validateOTP(email,  otp){

    if(!isValidEmail(email)){
        toast.warn("Please enter a valid email", toastStyles);
        return false;
    }
    if(otp.length !== 6){
        toast.warn('OTP should be 6 digits',toastStyles);
        return false;
    }

    const id = toast.loading("Verifying OTP",toastStyles)

    const res = await SubmitEmailOTPService({email,  otp});
    if(res.status === 201){
        toast.update(id, { 
            render: "OTP Verified", 
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else {
        toast.update(id, { 
            render: "Wrong OTP", 
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}