import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notfound'>
            <h2>Esta página no existe</h2>
            <span>Verifica que hayas ingresado correctamente el enlace</span>
            <p>
                <Link to="/">Ir al inicio</Link>
            </p>
        </div>
    )
}

export default NotFound