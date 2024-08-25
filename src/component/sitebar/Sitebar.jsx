import React, { useState } from 'react'
import "./Sitebar.css";
import Nav from '../narbar/Nav';


const Sitebar=()=> {

const [isTogle,setTogle]=useState(true);

const sitebarActive={
    width:"250px",
    height: "100vh",
    border:" 1px solid black",
    display: "flex",flexDirection:" column",
    alignItems: "center",
    padding:"20px 0px",transition: "0.5s"
}
const sitebarInactive={
    width:"100px",
    height: "100vh",
    border:" 1px solid black",
    display: "flex",flexDirection:"column",
    alignItems: "center",
    padding:"20px 0px",transition: "0.5s"
}
const aActive={
    width:"80%",
    height: "100%",
    display: "flex",
    alignItems: "center",cursor:"pointer",
    padding: "0px 0 0 0%",
}
const liActive={
    width:"100%",
    height: "100%",
    display: "flex",alignItems:"center",
    alignItems: "center",
    padding: "0px 0 0 10%",
    margin: "20px 0px"
}
const aInactive={
    width:"100%",
    height: "100%",cursor:"pointer",
    display: "flex",
    alignItems: "center",justifyContent:"center",
    padding: "0px 0 0 0",
}

const ulActive={
    width:"100%",
    display: "flex",flexDirection:" column",marginTop:"20%"
}
const ulInactive={
    width:"100%",
    display: "flex",flexDirection:" column",
    alignItems: "center",margin:"20% 0 0 0"

}
  return (
    <>
      <nav className="sitebar-nav" style={isTogle?sitebarActive:sitebarInactive}>
        <h2  style={{fontSize:isTogle?"19px":"16px"}}>Welcome</h2>

        <ul style={isTogle?ulActive:ulInactive}>
            <li  style={isTogle?liActive:aInactive}><a style={isTogle?aActive:aInactive}><i className="fa-solid fa-house"></i>{isTogle?"Dashboard":""}</a></li>
            <li  style={isTogle?liActive:aInactive}><a style={isTogle?aActive:aInactive}><i className="fa-solid fa-user-pen"></i>{isTogle?"Edit":""}</a></li>
            <li  style={isTogle?liActive:aInactive}><a style={isTogle?aActive:aInactive}><i className="fa-solid fa-store"></i>{isTogle?"Add Product":""}</a></li>
            <li  style={isTogle?liActive:aInactive}><a style={isTogle?aActive:aInactive}><i className="fa-solid fa-store"></i>{isTogle?"Products":""}</a></li>
            <li  style={isTogle?liActive:aInactive}><a style={isTogle?aActive:aInactive}><i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>{isTogle?"Logout":""}</a></li>
        </ul>

        <div className="toggle-sidebar" onClick={()=>setTogle(!isTogle)}>
            {
                isTogle?<i className="fa-bounce fa-duotone fa-solid fa-angles-left"></i>:<i className="fa-bounce fa-duotone fa-solid fa-angles-right"></i>
            }
        </div>
      </nav>
    </>
  )
}

export default Sitebar
