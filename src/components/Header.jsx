import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container container--fluid">
            <header>
                <div className='nav-pos'>
                    <Link className='logo' to='/'>Tra <img className='star-logo' src="https://i.ibb.co/dBLXHRj/favicon.png" alt="" /> </Link>
                    <div className="divisor-1"></div>
                    <NavBar/>
                </div>
            </header>
        </div>
    )
}

export default Header