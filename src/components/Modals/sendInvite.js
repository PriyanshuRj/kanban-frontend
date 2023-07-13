import React, { useState } from 'react'
import { ValidateSendInvite } from '../../validation/Invite';
import { useSelector } from 'react-redux';

export default function SendInvite() {

  const [email, setEmail] = useState('');
  const board = useSelector(state=>state.board.board);
  const userData = useSelector((state)=> state.user.value);
  async function send() {
    try {
      const res = await ValidateSendInvite(email, board._id, userData.name);
    } catch (e) {
      console.warn("error ", e);
    } 
  }

  return (
    <div className="w-96 max-w-lg px-8 pt-6 pb-8">
      <h1 className='text-center text-2xl font-semibold mb-4'>
        Add Project
      </h1>
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
        </div>
       
        <div className="flex items-center justify-between">
          <button onClick={send} className="bg-[#5030E5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send
          </button>
        </div>
      </form>
    </div>

  )
}
