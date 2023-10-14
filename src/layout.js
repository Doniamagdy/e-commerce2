import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
function Layout(){ 
  let [isUserLoggedIn,setIsUserLoggedIn] = useState(false)
  useEffect(() =>{
    if(localStorage.getItem("token") !=null){
      setIsUserLoggedIn(true)
    }else{
      setIsUserLoggedIn(false)
    }
  },[])
    return (
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }


export default Layout;
