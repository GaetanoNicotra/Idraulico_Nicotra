import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const RistrutturazioniPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mt-5 mb-5 bg-section-home rounded">
            <div className="row">

                <div className="col-lg-10 mx-auto">
                    {/* Link navigazione */}
                    <ul className='d-flex list-unstyled gap-5 justify-content-center mt-4 mb-4 text-decoration-none flex-wrap'>
                        <li> <NavLink className="nav-link" to='/pageImpianti' ><h5>Impianti</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Bagni'><h5>Bagni</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Box-doccia'><h5>Docce</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Autoclavi'><h5>Autoclavi</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Contatori'><h5>Contatori</h5></NavLink></li>
                        <li> <NavLink className="nav-link" to='/pagina-Ristrutturazioni'><h5>Ristrutturazioni</h5></NavLink></li>
                    </ul>

                    <div className='col-12 text-center '>
                        <video className='w-75 mx-h rounded' src="/imgs/imgs_ristrutturazioni/VID-20231028-WA0007.mp4" autoPlay controls loop muted></video>
                        <div className='carousel-description mb-4 mt-4'>
                            <h5>Ristrutturazione completa di un monovano</h5>
                            <p><a href="https://www.dimorabianca.it/"><u className='color-red'>Scopri di più su Dimora Bianca</u></a></p>
                        </div>
                    </div>
                </div>
                <div className="container text-center my-4">
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

    )
}

export default RistrutturazioniPage
