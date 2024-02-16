import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const NavLayout = () => {
    const linkData = [
        {path: '/category/programming', name:'Programming books'}
    ]

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav')
    }

    return (
        <>
            <nav ref={navRef}>
                <ul>
                    {linkData.map(({path, name}) => (
                        <Link to={path} key={name} onClick={showNavbar}>
                            {name}
                        </Link>
                    ))}
                    <button onClick={showNavbar} className="nav-btn nav-close-btn fa-solid fa-xmark"></button>
                    <Link className='cart-widget' to='/cart' onClick={showNavbar}>
                        <CartWidget />
                    </Link>
                </ul>
            </nav>
            <button onClick={showNavbar} className="nav-btn fa-solid fa-bars"></button>
        </>
    )
}

export default NavLayout
