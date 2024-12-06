import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './component/Footer'
function App() {

  return (
    <>
     <Navbar/>
     <div className='min-h-screen'>
     <Outlet/>
     </div>
     <MyFooter/>
    </>
  )
}

export default App