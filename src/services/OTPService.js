import axios from 'axios';
import URL from './URL';
import headers from './axiosClient';

export async function SubmitEmailOTPService(data){
    try{
        console.log(data)
        const res = await axios.post(URL + "otpverify",data);
        return res;
    }
    catch(error){
        console.log(error)
        return [];
    }
}