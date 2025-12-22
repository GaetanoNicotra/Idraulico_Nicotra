import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const AutoclaviPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <div className="container mt-5 mb-5 bg-section-home rounded">
                <div className="row">
                    <div className="col-lg-12 mx-auto">

                        {/* Link navigazione */}
                        <ul className='d-flex list-unstyled gap-5 mt-4 mb-4 justify-content-center flex-wrap'>
                            <li> <NavLink className="nav-link" to='/pageimpianti' ><h5>Impianti</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
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
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave11.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Gruppo pompe per un'autoclave</h5>
                                            <p>Pompe gemellate Calpeda per alimentazione multipla</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave2.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Gruppo pompe per autoclave</h5>
                                            <p>Pompe gemellate Pedrollo per un'autoclave condominiale</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave4.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Ammodernamento parziale autoclave</h5>
                                            <p>Sostituzione elettropompa gemellata e vaso d'espansione</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave5.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Mini autoclave monofamiliare</h5>
                                            <p>Impianto di sollevamento con pompa Pedrollo e vaso d'espansione</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave6.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Quadro elettrico per elettropompa</h5>
                                            <p>Control System elettronico per l'alimentazione e la protezione di una pompa trifase</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave8.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto di riserva</h5>
                                            <p>Mini autoclave con riserva idrica per appartamento</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave12.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Impianto di riserva</h5>
                                            <p>Autoclave munito di bypass con maggiore riserva idrica per alimentazione di un appartamento al sesto piano</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_autoclavi/img_idraulica_autoclave14.jpg" className="d-block carousel-img rounded" alt='autoclavi-idrauliche' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Autoclave</h5>
                                            <p>Autoclave munito di vaso d'espansione con garanzia 5 anni</p>
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
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto mb-4">
                                <h4 className="border-custom w-75 mx-auto pb-4">Perché scegliere noi</h4>
                                <p className="text-muted mt-3">
                                    Uniamo professionalità e oltre cinquant’anni di esperienza per offrire servizi idraulici completi, garantendo efficienza, qualità e soluzioni su misura per ogni esigenza.</p>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="p-4 shadow rounded bg-white h-100">
                                    <i className="fa-solid fa-screwdriver-wrench fs-1 color-red mb-3"></i>
                                    <h6 className="fw-bold mb-2">Interventi Rapidi</h6>
                                    <p className="small text-muted">
                                        Rispondiamo con prontezza alle urgenze idrauliche garantendo
                                        soluzioni rapide ed efficaci.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="p-4 shadow rounded bg-white h-100">
                                    <i className="fa-solid fa-droplet fs-1 color-red mb-3"></i>
                                    <h6 className="fw-bold mb-2">Materiali Certificati</h6>
                                    <p className="small text-muted">
                                        Utilizziamo solo componenti di qualità per assicurare impianti
                                        durevoli e conformi alle normative.
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="p-4 shadow rounded bg-white h-100">
                                    <i className="fa-solid fa-handshake fs-1 color-red mb-3"></i>
                                    <h6 className="fw-bold mb-2">Consulenza Gratuita</h6>
                                    <p className="small text-muted">
                                        Offriamo sopralluoghi e preventivi senza impegno,
                                        per scegliere insieme la soluzione migliore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AutoclaviPage
