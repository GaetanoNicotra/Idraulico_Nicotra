import React from 'react'

const ServiceCard = () => {
    return (
        <>
            <div className="container">
                <div className="row">

                    <div className='col-lg-12 d-flex'>
                        <h4 className=''>I nostri servizi</h4>
                        <div className='d-flex flex-wrap'>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay'>Impianti</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5>Bagni</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5>Box-Doccia</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5>Autoclavi</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5>Contatori</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5>Impianti</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
