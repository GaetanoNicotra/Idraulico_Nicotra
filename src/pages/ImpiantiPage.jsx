import React from 'react'
import { NavLink } from 'react-router-dom'

const ImpiantiPage = () => {
    return (

        <div className="container mt-5 mb-5 bg-section-home rounded">
            <div className="row">

                <div className="col-lg-10 mx-auto">

                    {/* Link navigazione */}

                    <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none'>
                        <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Box-Doccia</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                    </ul>

                    <div id="carouselExampleCaptions" className="carousel slide mb-5">
                        <div className="carousel-indicators bg-secondary-subtle rounded position-relative">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
                        </div>
                        <div className="carousel-inner ">

                            <div className="carousel-item active ">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti1.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania1" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                    <div className='carousel-description'>
                                        <h5>Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti3.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania3" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className='carousel-description'>
                                        <h5 >Impianto a collettore</h5>
                                        <p>Realizazione impianto a collettore di un bagno in appartamento da ristrutturare</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti4.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania4" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className="carousel-description">
                                        <h5>Impianto di scarico</h5>
                                        <p>Scarichi in PVC in un bagno realizzato da zero</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti5.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania5" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className="carousel-description">
                                        <h5>Impianto in un prefabricato in legno</h5>
                                        <p>Impianto di alimentazione in multistrato e scarichi in PVC</p>
                                    </div>

                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti6.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania6" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className="carousel-description">
                                        <h5>Collettore generale</h5>
                                        <p>Collettore centralizzato con alimetazione a byepass per un appartamneto da ristrutturare</p>
                                    </div>

                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti7.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania7" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className='carousel-description'>
                                        <h5>Ristrutturazione Bagno</h5>
                                        <p>Modifica impianto con adduzione in PPR e scarichi in PVC</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti8.jpeg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania8" />
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti16.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania9" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className='carousel-description'>
                                        <h5>Cassetta incasso</h5>
                                        <p>Collocazione Combifix e staffe bidet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti11.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania11" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className='carousel-description'>
                                        <h5>Predisposizione per WC e Bidet sospesi</h5>
                                        <p>Fissaggio combifix per WC e staffe per Bidet sospeso</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti12.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania12" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className='carousel-description'>
                                        <h5>Impianto completo per Bagno</h5>
                                        <p>Realizzazione impianto a collettore, scarichi in PVC e predisposizione staffe per sanitarii sospesi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti13.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania3" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className="carousel-description">
                                        <h5>Impianto completo per Bagno</h5>
                                        <p>Collocazione cassetta incasso</p>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="src/assets/imgs/imgs_impianti/img_impianti15.jpg" className="d-block w-100 carousel-img rounded" alt="img-impianti-catania15" />
                                <div className="carousel-caption-outside mt-4 mb-4 d-md-block">
                                    <div className="carousel-description">
                                        <h5>Impianto per lavanderia</h5>
                                        <p>Impianto di adduzione a multistrato e scarichi in PVC in una lavnderia in ristrutturazione</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottoni */}
                        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-left text-white"></i></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="btn-img p-3" aria-hidden="true"><i className="fa-solid fa-chevron-right text-white"></i></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpiantiPage
