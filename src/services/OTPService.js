import axios from 'axios';
import URL from './URL';

export async function SubmitEmailOTPService(data){
    try{
        console.log({data});
        const res = await axios.post(URL + "otpverify",data);
        console.log({res})
        return res;
    }
    catch(error){
        return [];
    }
}