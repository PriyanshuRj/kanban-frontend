
import React from "react";
import Board from "./pages/Board";
import { Router } from "./Router";
import { useSelector,useDispatch } from "react-redux";
import { setTheme } from "./redux/features/themeSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
  const darkToggle = useSelector((state)=> state.theme.dark)
  React.useEffect(()=>{
    if(localStorage.getItem("dark")){
        dispatch(setTheme(localStorage.getItem("dark")))
    }
},[])
  return (
    <div className={darkToggle ? 'dark' : ''} >
      <ToastContainer />
     <Router />
    </div>
  );
}

export default App;
