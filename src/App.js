
import React from "react";
import Board from "./pages/Board";
import { Router } from "./Router";
import { useSelector,useDispatch } from "react-redux";
import { setTheme } from "./redux/features/themeSlice";
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
     <Router />
    </div>
  );
}

export default App;
