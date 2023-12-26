/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    
     <Header/>

     <Outlet/>

     <Footer/>    
    
    
    </>
  )
}

export default layout