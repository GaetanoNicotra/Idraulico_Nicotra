import React from 'react'
import { NavLink } from 'react-router-dom'

const AutoclaviPage = () => {
    return (

        <>
            <div className="container mt-5 mb-5 bg-section-home rounded">
                <div className="row">
                    <div className="col-lg-12 mx-auto">

                        {/* Link navigazione */}
                        <ul className='d-flex list-unstyled gap-5 mt-4 mb-4 justify-content-center'>
                            <li> <NavLink className="nav-link" to='/pageimpianti' ><h5>Impianti</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Box-Doccia</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                        </ul>

                        <div id="carouselAutoclave" className="carousel slide mb-5">
                            <div className="carousel-indicators  bg-secondary-subtle rounded position-relative">
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="9" aria-label="Slide 11"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                <button type="button" data-bs-target="#carouselAutoclave" data-bs-slide-to="13" aria-label="Slide 14"></button>

                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave1.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania1" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave2.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania2" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave3.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania3" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave4.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania4" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave5.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania5" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave6.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania6" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave7.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania7" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave8.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania8" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave9.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania9" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave10.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania10" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">

                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave11.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania11" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave12.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania12" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave13.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania13" />
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
                                        <img src="src\assets\imgs\imgs_autoclavi\img_idraulica_autoclave14.jpg" className="d-block w-50 carousel-img rounded" alt="img-impianti-catania14" />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto a collettore</h5>
                                            <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                        </div>
                                    </div>
                                </div>


                                {/* Bottoni */}
                                <button className="carousel-control-prev " type="button" data-bs-target="#carouselAutoclave" data-bs-slide="prev">
                                    <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-left text-white"></i></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoclave" data-bs-slide="next">
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


export default AutoclaviPage
