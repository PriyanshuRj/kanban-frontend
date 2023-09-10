import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { ArrowRight2 } from 'iconsax-react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import authUtils from '../utils/authUtils'
import { setUser } from '../redux/features/userSlice'
import Loader from '../components/UI/Loader'
import { setProjects, setModalState } from '../redux/features/projectSlice'
import Modal from 'react-modal';
import { styles } from '../helpers/modalStyle';
import AddProject from '../components/Modals/AddProject'
export default function Layout({ children }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [sidebarState, setSidebarOpen] = useState(true);
  const modalState = useSelector(state => state.projects.modalState)
  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      const user = await authUtils.isAuthenticated()
      if (!user) {
        navigate('/login')
      } else {
        dispatch(setUser(user))
        dispatch(setProjects(user.projects))
        setLoading(false);
      }
    }
    checkAuth()
  }, [dispatch])
  function closeModal(){
    dispatch(setModalState(false));
  }
  return (
    <>
    <Modal
        isOpen={modalState}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Add Project Modal"
      >
        <AddProject  modalState={modalState} />
      </Modal>
    {loading ? (
     <Loader />
    ) : (
      <div className='flex flex-row w-full'>

      <Sidebar sidebarState={sidebarState} setSidebarOpen={setSidebarOpen} />
      <div className={`flex flex-row cursor-pointer absolute top-5 left-5 z-20 p-2 bg-[#D3D3D3] bg-opacity-80 rounded-xl items-center w-10 h-10 ${sidebarState && 'hidden'}`} onClick={() => setSidebarOpen(true)}>

        <ArrowRight2 size="20" color="#787486" variant="Outline" className='-mr-3' />
        <ArrowRight2 size="20" color="#787486" variant="Outline" />
      </div>
      <div className={`mainbody h-screen overflow-y-scroll flex flex-col w-full ${sidebarState && 'lg:ml-60'}  dark:bg-gray-800`}>

        <Header />
        {children}
      </div>
    </div>
    )}
    </>
  )
}
