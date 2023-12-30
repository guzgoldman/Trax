import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const NavLayout = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav')
    }

    return (
        <>
            <nav ref={navRef}>
                <ul>
                    <li>
                        <Link to='/speakers'>Speakers</Link>
                    </li>
                    <li>
                        <Link to="/turntables">Turntables</Link>
                    </li>
                    <li>
                        <Link to="/amps">Amplifiers</Link>
                    </li>
                    <li>
                        <Link to='/merch'>Merch</Link>
                    </li>
                    <li>
                        <button onClick={showNavbar} className="nav-btn nav-close-btn fa-solid fa-xmark"></button>
                    </li>
                    <Link to='/cart'>
                        <CartWidget/>
                    </Link>
                </ul>
            </nav>
            <button onClick={showNavbar} className="nav-btn fa-solid fa-bars"></button>
        </>
    )
}

export default NavLayout