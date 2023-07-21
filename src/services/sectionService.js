import axios from 'axios';
import URL from './URL';
import getHeader from './axiosClient';

export async function createSectionService(data, projectId){
    try{
        const res = await axios.post(URL + `section?projectId=${projectId}`, data ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}

export async function deleteSectionService(sectionId){
    try{
        const res = await axios.delete(URL + `section?sectionId=${sectionId}` ,{
            headers : getHeader()
        });
        
        return res;
    }
    catch(error){
        return [];
    }
}