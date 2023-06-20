import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { ArrowRight2 } from 'iconsax-react'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import authUtils from '../utils/authUtils'
import { setUser } from '../redux/features/userSlice'
export default function Layout({ children }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [sidebarState, setSidebarOpen] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) {
        navigate('/login')
      } else {
        dispatch(setUser(user))
        setLoading(false)
      }
    }
    checkAuth()
  }, [navigate])
  return (

    <div className='flex flex-row w-full'>

      <Sidebar sidebarState={sidebarState} setSidebarOpen={setSidebarOpen} />
      <div className={`flex flex-row cursor-pointer absolute top-5 left-5 z-20 p-2 bg-[#D3D3D3] bg-opacity-80 rounded-xl items-center w-10 h-10 ${sidebarState && 'hidden'}`} onClick={() => setSidebarOpen(true)}>

        <ArrowRight2 size="20" color="#787486" variant="Outline" className='-mr-3' />
        <ArrowRight2 size="20" color="#787486" variant="Outline" />
      </div>
      <div className={`mainbody h-screen overflow-y-scroll flex flex-col w-full ${sidebarState && 'lg:ml-60'}  `}>

        <Header />
        {children}
      </div>
    </div>
  )
}
