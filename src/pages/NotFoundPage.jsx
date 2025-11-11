import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row text-center bg-section-home rounded">
                <div className="col-12 pt-5 pb-5">
                    <h1 className='color-red mb-3'><u>ERROR 404</u></h1>
                    <h3>PAGINA NON TROVATA</h3>
                    <Link to='/'><p className='mt-4 text-body'><u>Torna alla Homepage</u></p></Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
