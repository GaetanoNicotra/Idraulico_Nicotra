import React from 'react'


const Header = () => {
    return (
        <>
            <div className='d-flex justify-content-around mt-4 align-items-center header'>
                <img src="src/assets/imgs/Idraulico_Nicotra_Logo.jpg" alt="logo_header" />
                <ul className='d-flex list-unstyled gap-5 link-header'>
                    <li >Home</li>
                    <li>Contatti</li>
                    <li>Servizi</li>
                    <li>Gallery</li>
                </ul>
            </div>
        </>
    )
}

export default Header
