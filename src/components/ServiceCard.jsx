import React from 'react'

const ServiceCard = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h4 className='text-center'>I nostri servizi</h4>
                    <div className='col-lg-12'>
                        <div className='d-flex flex-wrap'>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Impianti</h5>
                                <img src="src\assets\imgs\img_impianti.webp" alt="img-servizi" className='rounded' />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Bagni</h5>
                                <img src="src\assets\imgs\img_bagno.webp" alt="img-servizi" className='rounded' />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Box-Doccia</h5>
                                <img src="src\assets\imgs\box_img.webp" alt="img-servizi" className='rounded' />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Autoclavi</h5>
                                <img src="src\assets\imgs\autoclave_img.jpg" alt="img-servizi" className='rounded' />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Contatori</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" className='rounded' />
                            </div>
                            <div className="col-lg-4 card-servizi">
                                <h5 className='text-overlay rounded'>Ristrutturazioni</h5>
                                <img src="src\assets\imgs\jumbotron-idraulica.png" alt="img-servizi" className='rounded' />
                            </div>
                            <details>

                                <summary>
                                    Altri servizi
                                </summary>
                                <p>x</p>
                                <p>x</p>
                                <p>x</p>
                                <p>x</p>
                                <p>x</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard
