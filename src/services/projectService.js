import axios from 'axios';
import URL from './URL';
import headers from './axiosClient';

export async function createProjectService(data){
    try{
        const res = await axios.post(URL + "project", data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}
export async function getSingleProject(projectId){
    try{
        const res = await axios.get(URL + `project/getProject?projectId=${projectId}` ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function deleteProject(projectId){
    try{
        const res = await axios.get(URL + `project?projectId=${projectId}` ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}