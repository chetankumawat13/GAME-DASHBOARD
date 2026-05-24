import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'
import TopBar from '../components/TopBar'

const MainLayout = () => {
  return (
    <div className='layout '>
        <NavBar />
        <div className="maincontant">
         <TopBar />
            <main>
                <Outlet />
            </main>
           
        </div>
    </div>
  )
}

export default MainLayout