import axios from 'axios';
import URL from './URL';
import headers from './axiosClient';

export async function createSectionService(data, projectId){
    try{
        const res = await axios.post(URL + `section?projectId=${projectId}`, data ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function deleteSectionService(sectionId){
    try{
        const res = await axios.post(URL + `section?sectionId=${sectionId}` ,{
            headers : headers
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}