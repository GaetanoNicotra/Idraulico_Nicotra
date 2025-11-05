import React from 'react'
import { NavLink } from 'react-router-dom'

const RistrutturazioniPage = () => {
    return (
        <div>
            {/* Link navigazione */}
            <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none'>
                <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Box-Doccia</h5></NavLink></li>
                <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
            </ul>
        </div>
    )
}

export default RistrutturazioniPage
