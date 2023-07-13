import React, {useState, useEffect} from 'react'
import Layout from '../layout/Layout'
import { useParams } from 'react-router';
import { ValidateGetInvite, ValidateInvite } from '../validation/Invite';
import { Rings } from 'react-loader-spinner';
import { useNavigate } from 'react-router';
export default function Invite() {
  const navigate = useNavigate();
    const { inviteId } = useParams();
    const [inviteDate, setInviteData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getInviteDetails(){
      const res = await ValidateGetInvite(inviteId, navigate);
      if(res){
        setInviteData(res.data.invite);
      }
      setLoading(false);
    }
    async function acceptInvite(){
      const res = await ValidateInvite(inviteId, true, navigate);
    }
    async function rejectInvite(){
      const res = await ValidateInvite(inviteId, false, navigate);
    }
    useEffect(()=>{
      getInviteDetails()
    },[])
  return (
    <Layout>
        {loading ? (
      <div className="flex items-center justify-center h-32">
        <Rings
          height="220"
          width="220"
          // radius="9"
          color="rgb(30 64 175)"
          ariaLabel="loading"
          />{" "}
      </div>
    ) : (
      <div className='flex w-full h-full justify-center items-center '>

    <div className='border p-8 rounded-2xl max-w-[32rem] '>
      <div>
        <p className='font-semibold text-center mb-4 text-2xl '>Accept Invite</p>
        <p>You have been invited by <span className='font-semibold'>{inviteDate.senderName ? inviteDate.senderName : "" }</span> to join the project <span className='font-semibold'>{inviteDate.projectName ? inviteDate.projectName : ""}</span>. </p>
        <p className='mt-2'>Do you want to accept the invitation ?</p>
        <div className='flex flex-row justify-between mt-6'>

        <button onClick={acceptInvite} className="bg-black hover:shadow-lg hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-200 ease-in-out" type="button">
            Accept
          </button>
          <button onClick={rejectInvite} className="bg-[#E4E5E4] hover:bg-gray-400 hover:text-white hover:scale-105 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline duration-200 ease-in-out" type="button">
            Decline
          </button>
        </div>
      </div>
    </div>
      </div>
      )}
    </Layout>
  )
}
