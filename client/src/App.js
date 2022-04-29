import React, { useEffect } from "react"
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Registration from "./components/registration/Registration"
import Login from "./components/registration/Login"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "./actions/user";

function App() {
  const isAuth = useSelector(state=>state.user.isAuth)
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(auth())
  },[])
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      {!isAuth &&
      <Routes>
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      }
      
    </div>
    </BrowserRouter>
  );
}

export default App;
