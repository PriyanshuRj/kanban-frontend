import axios from 'axios';
import URL from './URL';
import headers from './axiosClient';

export async function createProjectService(data){
    try{
        console.log(headers)
        const res = await axios.post(URL + "project", data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}