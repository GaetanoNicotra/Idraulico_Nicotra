import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-around mt-4 align-items-center header nav'>
                <Link to='/'><img src="src/assets/imgs/Idraulico_Nicotra_Logo.jpg" alt="logo_header" className='pb-3' /></Link>
                <ul className='d-flex list-unstyled gap-5 link-header'>
                    <li>Home</li>
                    <li>Contatti</li>
                    <li>Servizi</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </>
    )
}

export default Header
