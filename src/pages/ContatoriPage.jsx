import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const ContatoriPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <>
            <div className="container mt-5 mb-5 bg-section-home rounded">
                <div className="row">

                    <div className="col-lg-12 mx-auto">

                        {/* Link navigazione */}

                        <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 flex-wrap' >
                            <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                        </ul>

                        <div id="carouselContatori" className="carousel slide mb-5">
                            <div className="carousel-indicators bg-secondary-subtle rounded position-relative">
                                <button type="button" data-bs-target="#carouselContatori" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselContatori" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselContatori" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\img_contatori\img_idraulico_contatori3.jpg" className="d-block carousel-img rounded" alt="img-contatori-catania3" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Contatori condominiali</h5>
                                            <p>Batteria di contatori condominiale con gruppo di distirbuzione in ottone</p>
                                        </div>
                                    </div>

                                </div>


                                <div className="carousel-item ">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\img_contatori\img_idraulico_contatori1.jpg" className="d-block carousel-img rounded" alt="img-contatori-catania1" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Riduttore di pressione</h5>
                                            <p>Messa in opera riduttore di pressione su colonna di adduzione di un'abitazione</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\img_contatori\img_idraulico_contatori2.jpg" className="d-block carousel-img rounded" alt="img-contatori-catania2" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Contatori</h5>
                                            <p>Sportello completo per alloggio contatori</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* Bottoni */}
                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselContatori" data-bs-slide="prev">
                                <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-left text-white"></i></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselContatori" data-bs-slide="next">
                                <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-right text-white"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContatoriPage
