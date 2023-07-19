import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './pages/Board'
import Login from './pages/login'
import Signup from './pages/signup'
import VerifyOTP from './pages/verifyOTP'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Invite from './pages/Invite'
import Profile from './pages/Profile'
export function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/otp" element={<VerifyOTP/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/boards" element={<Board/>} />
        <Route path="/boards/:boardId" element={<Board />} />
        <Route path="/invite/:inviteId" element={<Invite />} />
        <Route path="/" element={<LandingPage />} />
   
        </Routes>
      </BrowserRouter>
    )
  }