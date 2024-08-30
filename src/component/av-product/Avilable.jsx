import React from 'react'
import './Avil.css'
import { Navi } from './Navi'
import { Rtop } from './Rtop'
import { Rmiddle } from './Rmiddle'
import {Products} from './Products'


function Avilable() {
  return (
    <>
    <div class="main bg">
        <div class="container">
            <div class="left-container ">
                <div class="left-logo">
                    <img src="https://s.tmimgcdn.com/scr/800x500/183700/modern-shopping-business-logo-template_183766-original.jpg"/>
                </div>
                {/* <div class="left-nav ">
                    <Navi/>
                    <Navi/>
                    <Navi/>
                    <Navi/>
                    
                </div> */}
            </div>
            <div class="right-container">
              <Rtop/>
              <Rmiddle/>
              <Products/>
            </div>
        </div>
    </div>
    </>
  )
}


export{Avilable}
