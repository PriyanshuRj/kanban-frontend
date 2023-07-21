import { toast } from 'react-toastify';
import { addProfilePictureService, updateProfile } from '../services/userService';
import toastStyles from '../helpers/toastStyle';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

export default async function validatePIP(photo) {

    if (!photo) {
        toast.warn('Please select a picture', toastStyles);
        return false;
    }

    const id = toast.loading("Uploading Profile Picture", toastStyles)

    const formData = new FormData();
    formData.append("file", photo, photo.name);
    const res = await addProfilePictureService(formData);

    if (res.status === 200) {
        toast.update(id, {
            render: "Profile Picture Updated",
            type: "success",
            isLoading: false,
            ...toastStyles,
        });
        return res;
    }

    else {
        toast.update(id, {
            render: "Error in updating the profile picture",
            type: "error",
            isLoading: false,
            ...toastStyles,
        });
        return false;
    }
}

export async function validateProfileUpdate(email, mobileno, username, name) {
    if (name.length < 2) {
        toast.warn('Name should be atlest 2 units', toastStyles);
        return false;
    }
    if (username.length < 2) {
        toast.warn('Username should be atlest 2 units', toastStyles);
        return false;
    }
    if (mobileno.toString().length !== 10) {
        toast.warn('Mobile number should be 10 digits', toastStyles);
        return false;
    }
    if (!isValidEmail(email)) {
        toast.warn('Invalid Email', toastStyles);
        return false;
    }

    const id = toast.loading("Updating profile in", toastStyles)
    const res = await updateProfile({ email, name, username, mobileno });
    if (res.status === 200) {
        toast.update(id, {
            render: "Profile updated Successful",
            type: "success",
            isLoading: false,
            ...toastStyles
        });
        return res;
    }
    else if (res.status === 205) {

        toast.update(id, {
            render: res.data.message,
            type: "warning",
            isLoading: false,
            ...toastStyles
        });
        return false;

    }
    else {
        toast.update(id, {
            render: "Error in updating profile",
            type: "error",
            isLoading: false,
            ...toastStyles
        });
        return false;
    }
}