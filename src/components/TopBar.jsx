import React from 'react'
import '../style/topbar.css'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <div className="search">
            <i className="ri-search-line"></i>
            <input type="text" placeholder='Searching' />
        </div>

    </div>
  )
}

export default TopBar