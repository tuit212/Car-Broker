import React from 'react'
import './Header.scss'
import HeaderTop from '../HeaderTop/HeaderTop'

const Header = () => {
  return (
    <div className='section-header'>
        <div className="container">
            <HeaderTop/>
        </div>
    </div>
  )
}

export default Header