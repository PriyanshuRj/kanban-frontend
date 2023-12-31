import axios from 'axios';
import URL from './URL';
import getHeader from './axiosClient';

export async function createProjectService(data){
    try{
        const res = await axios.post(URL + "project", data ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}
export async function getSingleProjectService(projectId){
    try{
        const res = await axios.get(URL + `project/getProject?projectId=${projectId}` ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function deleteProjectService(projectId){
    try{
        const res = await axios.delete(URL + `project?projectId=${projectId}` ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}