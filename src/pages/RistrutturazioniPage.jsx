import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const RistrutturazioniPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 mb-5 bg-section-home rounded">
            <div className="row">

                <div className="col-lg-10 mx-auto">
                    {/* Link navigazione */}
                    <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none flex-wrap'>
                        <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                    </ul>

                    <div className='col-12 text-center '>
                        <video className='w-75 mx-h rounded' src="src\assets\imgs\imgs_ristrutturazioni\VID-20231028-WA0007.mp4" autoPlay controls loop></video>
                        <div className='carousel-description mb-4 mt-4'>
                            <h5>Ristrutturazione completa di un monovano</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RistrutturazioniPage
