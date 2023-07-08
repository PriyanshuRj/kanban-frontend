import { SubmitEmailOTPService } from "../services/OTPService";
import {  toast } from 'react-toastify';

export default async function validateOTP(email,  otp){

    if(otp.length !== 6){
        toast.warn('OTP should be 6 digits', {
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

    const id = toast.loading("Verifying OTP",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    
    const res = await SubmitEmailOTPService({email,  otp});
    console.log(res);
    if(res.status === 201){
        toast.update(id, { 
            render: "OTP Verified", 
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
  
    else {
        toast.update(id, { 
            render: "Wrong OTP", 
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