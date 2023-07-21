import axios from 'axios';
import URL from './URL';

export async function SubmitEmailOTPService(data){
    try{
        const res = await axios.post(URL + "otpverify",data);
        return res;
    }
    catch(error){
        return [];
    }
}