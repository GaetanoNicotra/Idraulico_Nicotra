import React from 'react'
import { NavLink } from 'react-router-dom'

const BoxPage = () => {
    return (
        <>
            <div className="container mt-5 mb-5 bg-section-home rounded">
                <div className="row">

                    <div className="col-lg-12 mx-auto">

                        {/* Link navigazione */}

                        <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none'>
                            <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Box-Doccia</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                        </ul>

                        <div id="carouselBox" className="carousel slide mb-5">
                            <div className="carousel-indicators bg-secondary-subtle rounded position-relative">
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\imgs_Box-doccia\img_idraulico_boxdoccia1.jpg" className="d-block w-25 carousel-img rounded" alt="img-boxdoccia-catania1" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto a collettore</h5>
                                            <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\imgs_Box-doccia\img_idraulico_boxdoccia2.jpg" className="d-block w-25 carousel-img rounded" alt="img-boxdoccia-catania2" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto a collettore</h5>
                                            <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\imgs_Box-doccia\img_idraulico_boxdoccia3.jpg" className="d-block w-25 carousel-img rounded" alt="img-boxdoccia-catania3" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto a collettore</h5>
                                            <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Bottoni */}
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselBox" data-bs-slide="prev">
                                    <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-left text-white"></i></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselBox" data-bs-slide="next">
                                    <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-right text-white"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxPage
