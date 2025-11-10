import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const BagniPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className="container mt-5 mb-5 bg-section-home rounded" id='gallery'>
            <div className="row">

                <div className="col-lg-12 mx-auto">

                    {/* Link navigazione */}

                    <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 flex-wrap'>
                        <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                    </ul>

                    <div id="carouselImpianti" className="carousel slide mb-5" >
                        <div className="carousel-indicators bg-secondary-subtle rounded position-relative">
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        </div>
                        <div className="carousel-inner" id="bagni">

                            <div className="carousel-item active">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni7.jpeg" className="d-block carousel-img rounded" alt="img-bagni-catania1" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Bagno ristrutturato</h5>
                                        <p>Realizzazione bagno per clienti senior</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni2.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania2" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Mobile bagno</h5>
                                        <p>Composizione mobile sospeso stilizzato e specchiera a Led</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni3.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania3" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Sanitari filomuro</h5>
                                        <p>Realizzazione muretto per incorporare cassetta ad incasso</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni5.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania5" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Lavabo doppio</h5>
                                        <p>Lavabo doppio realizzato con materiali innovativi in un bagno moderno</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni8.jpeg" className="d-block carousel-img rounded" alt="img-bagni-catania8" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Trasformazione lavanderia in bagno</h5>
                                        <p>Creazione di un bagno completo da ex lavanderia con creazione gradino </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni11.jpeg" className="d-block carousel-img rounded" alt="img-bagni-catania11" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Servizio per ufficio</h5>
                                        <p>Posa WC e lavabo a seguito di ristrutturazione in un ufficio</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni12.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania12" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Lavabo con specchiera a Led</h5>
                                        <p>Trasformazione vecchio lavabo tradizionale con composizione moderna</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni13.jpg" className="d-block carousel-img rounded" id='img-house-wood' alt="img-bagni-catania13" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Bagno per disabili</h5>
                                        <p>Realizzazione bagno per disabili in una casetta in legno</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni17.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania17" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Lavanderia moderna</h5>
                                        <p>Creazione lavanderia con mobile moderno</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni14.jpg" className="d-block carousel-img rounded" alt="img-bagni-catania18" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Sanitari vintage</h5>
                                        <p>Ammodernamento bagno con sostituzione sanitari Cesame Serie 2000</p>
                                    </div>
                                </div>
                            </div>


                            {/* Bottoni */}
                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselImpianti" data-bs-slide="prev">
                                <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-left text-white"></i></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselImpianti" data-bs-slide="next">
                                <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-right text-white"></i></span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagniPage
