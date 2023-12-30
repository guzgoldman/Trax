import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container container--fluid">
            <header>
                <div className='nav-pos'>
                    <Link className='logo' to='/'>Trax</Link>
                    <div className="divisor-1"></div>
                    <NavBar/>
                </div>
            </header>
        </div>
    )
}

export default Header