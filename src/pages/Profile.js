import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Edit } from 'iconsax-react';

import {  useSelector } from 'react-redux'
import Projects from '../components/Projects';
import Modal from "react-modal";
import { styles } from '../helpers/modalStyle';
import UpdateProfilePicture from '../components/Modals/UpdateProfilePic';
import UpdateProfile from '../components/Modals/UpdateProfile';
const profilePicture = process.env.PUBLIC_URL + "/user1.png";

export default function Profile() {
  const userData = useSelector((state) => state.user.value);
  const [pipModal, setPIPModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  function openPIPmodal() {
    setPIPModal(true);
  }
  function openEditModal() {
    setEditModal(true);
  }
  function closePIPModal() {
    setPIPModal(false);
  }
  function closeEditModal() {
    setEditModal(false);
  }

  return (
    <Layout>
      <Modal
        isOpen={pipModal}
        ariaHideApp={false}
        onRequestClose={closePIPModal}
        style={styles}
      >
        <UpdateProfilePicture closeProfileModal={closePIPModal} />
      </Modal>
      <Modal
        isOpen={editModal}
        ariaHideApp={false}
        onRequestClose={closeEditModal}
        style={styles}
      >
        <UpdateProfile closeModal={closeEditModal} />
      </Modal>
      <div className='flex flex-col mt-10 md:ml-10 ml-4'>
        <div className='flex flex-row'>
          <div className='flex flex-col justify-center cursor-pointer' onClick={openPIPmodal}>
          {userData.profilePicture ?
            <img src={userData.profilePicture ? userData.profilePicture : profilePicture} alt="profile" className='h-56 w-56 rounded-full object-cover cursor-pointer hover:opacity-50 ease-in-out duration-200'  />
            :
            <div className='mr-2 h-56 w-56 rounded-full bg-blue-400 border border-2 border-blue-600 flex items-center justify-center text-[6rem]'>
                        {userData.name && userData.name.substring(0,2)}
                        </div>
            }

          </div>
          <div className='flex ml-10 flex-col h-4/5 justify-between dark:text-white'>
            <div>
              <div className='flex flex-row items-center mt-2'>

                <p className='text-4xl font-medium  '> {userData?.username ? userData.username : userData.name}</p>
                <Edit
                  size="25"
                  color="#5030E5"
                  variant="Outline"
                  className='ml-10'
                  onClick={openEditModal}
                />
              </div>
              <p className='text-lg font-medium text-gray-600 dark:text-gray-400 mt-2'> {userData.name}</p>
            </div>
            <div>

              <p className='text-sm font-medium text-gray-600 dark:text-gray-400 mt-2'>  {userData.email}</p>
              <p className='text-xs font-medium text-gray-600 dark:text-gray-400 mt-2'> +91 {userData.mobileno}</p>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </Layout>
  )
}
