import { getInvite, replyInvite, sendInvite } from '../services/inviteClient';
import {  toast } from 'react-toastify';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export async function ValidateGetInvite(inviteId, navigate){
    if(!inviteId) return false;
    const res = await getInvite(inviteId);
    console.log({res})
    if(res.status === 200){
        return res;
    }
    else if(res.status === 205){
        toast.error("Invite is not ment for You", { 
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate("/dashboard");
        return false;
    }
    else {
        toast.error("Unable to get The Invite", { 
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
      
       
}

export async function ValidateInvite(inviteId, acepted, navigate){
    if(!inviteId) {
        toast.error("Invite ID not found", { 
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

    const id = toast.loading("Creating Project",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    const res = await replyInvite({acepted},inviteId);
    console.log({res})
    if(res.status === 200){
        toast.update(id, { 
            render: "Invite Accepted", 
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
        navigate("/dashboard");
        return res;
    }
  
    else {
        toast.update(id, { 
            render: "Error Accepting Request", 
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

export async function ValidateSendInvite(email, projectId, username){

    if(projectId.length == 0){
        toast.warn('Project Not fonud ', {
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
    if(!isValidEmail(email)){
        toast.warn('Invalid Email ', {
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

    const id = toast.loading("Sending invite",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })

    
    const res = await sendInvite({email, projectId, username});
    console.log(res);
    if(res.status === 201){
        toast.update(id, { 
            render: "Invite Send Successful", 
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
            render: "Sending invite failed", 
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