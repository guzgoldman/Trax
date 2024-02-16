import React from 'react'
import NavLayout from './NavLayout'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container container--fluid">
            <header>
                <div className='nav-pos'>
                    <Link className='logo' to='/'>Vu<img className='star-logo' src="https://i.ibb.co/dBLXHRj/favicon.png" alt="" /> </Link>
                    {/* <div className="divisor"></div> */}
                    <NavLayout/>
                </div>
            </header>
        </div>
    )
}

export default Header