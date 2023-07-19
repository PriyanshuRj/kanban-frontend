import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CloseCircle, DocumentUpload } from 'iconsax-react';
import { updateProfilePicture } from "../../redux/features/userSlice";
import { toast } from 'react-toastify';
import validatePIP from "../../validation/Profile";
export default function UpdateProfilePicture({ closeProfileModal }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [profilePictue, setProfilePictue] = useState(null);
  const userData = useSelector((state) => state.user.value);

  const handleImageChange = (event) => {
    setProfilePictue(null);
    setImage(null);

    if (event.target.files[0] && event.target.files[0].type.substring(0, 5) === "image") {
      if (event.target.files[0].size < 1000000) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
          setImage(reader.result);
        };

        if (file) {
          reader.readAsDataURL(file);
        }

        setProfilePictue(file);

      }

      else toast.warn('Please select an image smaller than 1MB');
    }

    else toast.warn('Please select an Image');


  };

  async function updatePIP() {
    try {

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };

      if (profilePictue) {
        reader.readAsDataURL(profilePictue);
      }
      dispatch(updateProfilePicture(image));
      const res = await validatePIP(profilePictue);
      console.log(res);


      if (res.status === 200) {
        console.log(res.data);
        console.log(userData)
        closeProfileModal();
      }
    } catch (e) {
      console.warn("error ", e);
    }
  }



  return (
    <div className=" px-8 pt-6 pb-8 min-w-[28rem]">
      <div className='mb-4 font-semibold text-lg flex justify-end'>

        <CloseCircle size="25" color="#36454F" variant="Bulk" onClick={closeProfileModal} />
      </div>
      <form >

        <div className="flex items-center justify-center w-full my-6">
          <label className="flex flex-col rounded-lg border-2 border-dashed w-full p-10 py-5 group text-center">
            <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
              {
                profilePictue && profilePictue.name}
              <div className="flex flex-auto mx-auto mb-2">
                <DocumentUpload
                  size="64"
                  color="#5030E5"
                  variant="Bulk"
                  className='my-4'
                />
              </div>
              {
                !profilePictue ?
                  <p className="pointer-none text-gray-500 "><span className="text-sm">Drag and drop</span> your profile picture <br /> or select a file from your computer</p> :
                  <p className="pointer-none text-gray-500 ">Change the picture</p>
              }
            </div>
            <input type="file" className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>


        <div className="flex items-center justify-between mt-4">
          <button onClick={updatePIP} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Update
          </button>
        </div>
      </form>
    </div>

  )
}
