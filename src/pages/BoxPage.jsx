import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const BoxPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="container mt-5 mb-5 bg-section-home rounded">
                <div className="row">

                    <div className="col-lg-12 mx-auto">

                        {/* Link navigazione */}

                        <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none flex-wrap'>
                            <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                            <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                        </ul>

                        <div id="carouselBox" className="carousel slide mb-5">
                            <div className="carousel-indicators bg-secondary-subtle rounded position-relative">
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselBox" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_Box-doccia/img_idraulico_boxdoccia1.jpg" className="d-block carousel-img rounded" alt='Box-doccia' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Box Doccia angolare</h5>
                                            <p>Box Doccia angolare con porta scorrevole a frizione</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_Box-doccia/img_idraulico_boxdoccia2.jpg" className="d-block carousel-img rounded" alt='Box-doccia' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Doccia angolare</h5>
                                            <p>Doccia con piatto realizzato in muratura e box doccia angolare (70 cm x 90 cm)</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_Box-doccia/img_idraulico_boxdoccia3.jpg" className="d-block carousel-img rounded" alt='Box-doccia' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Doccia moderna</h5>
                                            <p>Doccia angolare con piatto in marmo resina e lato fisso in cristallo con profilo nero</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className='d-flex justify-content-center'>
                                        <img src="/imgs/imgs_Box-doccia/img_idraulico_boxdoccia4.webp" className="d-block carousel-img rounded" alt='Box-doccia' />
                                    </div>
                                    <div className="carousel-caption-outside mt-4 mb-4 d-md-block ">
                                        <div className='carousel-description'>
                                            <h5>Doccia a nicchia</h5>
                                            <p>Realizzazione doccia con piatto in marmoresina e porta pivotante</p>
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
                    <div className="container text-center my-3">
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

export default BoxPage
