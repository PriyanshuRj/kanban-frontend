import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Board from './pages/Board'
import Login from './pages/login'
import Signup from './pages/signup'
import VerifyOTP from './pages/verifyOTP'
import LandingPage from './pages/LandingPage'
export function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/otp" element={<VerifyOTP/>} />

        <Route path="/boards" element={<Board/>} />
        <Route path="/boards/:boardId" element={<Board />} />
        <Route path="/" element={<LandingPage />} />
   
        </Routes>
      </BrowserRouter>
    )
  }