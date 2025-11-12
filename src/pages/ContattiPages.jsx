import React from 'react';

const ContattiPages = () => {
    return (
        <>
            <div className="image-container">
                <img
                    src="src\assets\imgs\img_home\img_contatti2.jpg"
                    alt="immagine_pagina_contatti"
                    className="img_contatti"
                />

                <div className="overlay-title col-10">
                    <h1 className='border-custom-contatti mx-auto pb-3'>I nostri contatti</h1>
                </div>
            </div>



            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <i className="fa-solid fa-location-dot color-red mt-5 mb-2 fs-3"></i>
                        <div className="pb-1">
                            <h4>Idraulico Nicotra</h4>
                            <p>Viale Mario Rapisardi 523, 95123 Catania (CT)</p>
                        </div>
                        <hr />

                        {/* Social */}
                        <div className="col-12 d-flex justify-content-center text-center gap-5">
                            <ul className="list-unstyled">
                                <li className="pb-2 pt-2">
                                    <h4>WhatsApp</h4>
                                    <p>Inviaci un messaggio su WhatsApp, ti risponderemo il prima possibile</p>
                                </li>
                                <hr className="pb-2" />
                                <li>
                                    <a
                                        href="https://wa.me/393387725379?text=Salve,%20vorrei%20essere%20contattato"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-whatsapp fs-1 color-red pb-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-section-home container-fluid py-5">
                <div className="row align-items-center justify-content-around text-center">

                    {/* Blocco sinistro: Contatti */}
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center mb-5 mb-md-0">
                        <i className="fa-regular fa-user fs-2 color-red me-5"></i>
                        <ul className="list-unstyled mb-5 mt-5 text-start lh-lg">
                            <li>
                                <b>Telefono</b>
                                <a href="tel:+39095351281" className="text-body px-2">
                                    095 351281
                                </a>
                            </li>
                            <li>
                                <b>Cellulare</b>
                                <a href="tel:+393387725379" className="text-body px-2">
                                    338 7725379
                                </a>
                            </li>
                            <li>
                                <b>Email</b>
                                <a href="mailto:raimonicotra@virgilio.it" className="text-body px-2">
                                    raimonicotra@virgilio.it
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Blocco destro: Orari */}
                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled mb-5 mt-5 text-start">
                            <li className="pb-2">
                                <b>Lunedì - Venerdì:</b> 8:00 - 19:00
                            </li>
                            <li className="pb-2">
                                <b>Sabato:</b> 8:00 - 13:00
                            </li>
                            <li className="pb-2">
                                <b>Domenica:</b> Chiuso
                            </li>
                        </ul>
                        <i className="fa-regular fa-clock fs-2 color-red ms-5"></i>
                    </div>

                </div>
            </div>

        </>
    );
};

export default ContattiPages;
