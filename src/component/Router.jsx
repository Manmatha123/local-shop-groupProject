import React from 'react'
import Home1 from './home1/Home1'
import {Route,Routes}from 'react-router-dom';
import Login from './login/Login';
import Redg from './register/Redg';
const Router=()=> {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/shoping/signin' element={<Login/>}/>
        <Route path='/shoping/signup' element={<Redg/>}/>
    </Routes>

    
      
    </>
  )
}

export default Router
