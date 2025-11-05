import React from 'react'
import { NavLink } from 'react-router-dom'

const BagniPage = () => {
    return (

        <div className="container mt-5 mb-5 bg-section-home rounded" id='gallery'>
            <div className="row">

                <div className="col-lg-12 mx-auto">

                    {/* Link navigazione */}

                    <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4'>
                        <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Box-Doccia</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                    </ul>

                    <div id="carouselImpianti" className="carousel slide mb-5">
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
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="10" aria-label="Slide 11"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="11" aria-label="Slide 12"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="12" aria-label="Slide 13"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="13" aria-label="Slide 14"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="14" aria-label="Slide 15"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="15" aria-label="Slide 16"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="16" aria-label="Slide 17"></button>
                            <button type="button" data-bs-target="#carouselImpianti" data-bs-slide-to="17" aria-label="Slide 18"></button>

                        </div>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni1.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania1" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni2.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania2" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni3.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania3" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni4.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania4" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni5.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania5" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni6.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania6" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni7.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania7" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni8.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania8" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni9.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania9" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni10.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania10" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni11.jpeg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania11" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni12.jpeg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania12" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni13.jpeg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania13" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni14.jpeg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania14" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni15.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania15" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni16.jpeg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania16" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni17.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania17" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='d-flex justify-content-center'>
                                    <img src="src\assets\imgs\imgs_bagni\img_idraulico_bagni18.jpg" className="d-block w-50 carousel-img rounded" alt="img-bagni-catania18" />
                                </div>
                                <div className="carousel-caption-ouside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
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
