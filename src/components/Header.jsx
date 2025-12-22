import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg py-3">
            <div className="container-fluid d-flex align-items-center justify-content-between me-4 ms-4">

                {/* Logo header */}

                <Link to='/'><img src="/imgs/img_home/Idraulico_Nicotra_Logo.jpg" alt="logo_header" className='pb-3 mt-2' /></Link>

                <a href="https://wa.me/393387725379?text=Salve,%20vorrei%20essere%20contattato." target="_blank" rel="noopener noreferrer" id='button-whatsapp' aria-label='Clicca sul logo di whatsapp per contattarci' >
                    <i className="fa-brands fa-whatsapp fs-1 color-red"></i>
                </a>
                {/* Hamburger menù */}
                <button
                    className="navbar-toggler rounded bg-body-secondary border-0 p-2 mb-2 shadow-sm"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen ? "true" : "false"}
                    aria-label="Toggle navigation" >
                    <span onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <i className="fa-solid fa-xmark fs-3 text-dark"></i> : <i className="fa-solid fa-bars fs-3 text-dark"></i>}</span>
                </button>

                {/* Link header */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

                    <ul className='navbar-nav d-flex align-items-center gap-lg-5 link-header'>
                        <li className="nav-item">
                            <Link to='/' className='nav-link text-black fw-medium'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/pagina-Contatti' className='nav-link text-black fw-medium'>Contatti</Link>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth to="/pagina-Bagni#gallery" className='nav-link text-black fw-medium'>I nostri lavori</HashLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav >
    )
}

export default Header
