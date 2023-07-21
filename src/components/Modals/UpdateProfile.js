import React, { useState, useEffect } from 'react'
import { validateProfileUpdate } from '../../validation/Profile';
import { updateProfile } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircle } from 'iconsax-react';

export default function UpdateProfile({ closeModal }) {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.value);
    const [email, setEmail] = useState('');
    const [mobileno, setMobileno] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (userData) {
            setEmail(userData.email);
            setMobileno(userData.mobileno);
            setUsername(userData.username);
            setName(userData.name);
        }
    }, [userData])

    async function updateUserProfile() {
        const prevState = userData;
        try {

            dispatch(updateProfile({ email, mobileno, username, name }))
            closeModal();
            const res = await validateProfileUpdate(email, mobileno, username, name);
            if (!res || res.status !== 200) {

                dispatch(updateProfile(prevState))
            }
            
        } catch (e) {
            dispatch(updateProfile({ prevState }))
            console.warn("error ", e);
        }
    }

    return (
        <div className="w-96 max-w-lg px-8 pt-6 pb-8">
            <div className='mb-4 font-semibold text-lg flex justify-end'>

                <CloseCircle size="25" color="#36454F" variant="Bulk" onClick={closeModal} />
            </div>
            <h1 className='text-center text-2xl font-semibold mb-4'>
                Update Profile
            </h1>
            <form >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneno">
                        Phone no
                    </label>
                    <input
                        value={mobileno}
                        onChange={(e) => setMobileno(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneno" type="text" placeholder="Phone no" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="User name" />
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={updateUserProfile} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Update
                    </button>
                </div>
            </form>
        </div>

    )
}
