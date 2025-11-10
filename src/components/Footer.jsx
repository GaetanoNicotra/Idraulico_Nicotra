import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="bg-footer py-5">
                <div className="container p-3">

                    <div className="row justify-content-center gap-4 text-center">

                        {/* contatti */}
                        <div className="col-lg-3 col-md-4 col-sm-12 ">
                            <ul className="list-unstyled text-white">
                                <li className="pb-4"><h4>Contatti</h4></li>
                                <hr className="pb-4 w-75 m-auto" />
                                <li>
                                    <i className="pb-4 fa-solid fa-phone"></i>
                                    <a href="tel:+39095351281" className="text-white px-2">095 351281</a>
                                </li>
                                <li>
                                    <i className="pb-4 fa-solid fa-mobile-screen-button"></i>
                                    <a href="tel:+393387725379" className="text-white px-2">338 7725379</a>
                                </li>

                                <li>
                                    <i className="pb-4 fa-regular fa-envelope-open"></i>
                                    <a href="mailto:raimonicotra@virgilio.it" className="text-white px-2">
                                        raimonicotra@virgilio.it
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* orari */}
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <ul className="list-unstyled text-white ">
                                <li className="pb-4"><h4>I Nostri orari</h4></li>
                                <hr className="pb-4 w-75 m-auto" />
                                <li className="pb-4">Lunedì - Venerdì: 8:00 - 19:00</li>
                                <li className="pb-4">Sabato: 8:00 - 13:00</li>
                                <li className="pb-4">Domenica: Chiuso</li>
                            </ul>
                        </div>

                        {/* social */}
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <ul className="list-unstyled text-white ">
                                <li className="pb-4"><h4>Social</h4></li>
                                <hr className="pb-4 w-75  m-auto" />
                                <li>
                                    <a href="https://wa.me/393387725379?text=Salve,%20vorrei%20essere%20contattato" target="_blank" rel="noopener noreferrer"  >
                                        <i className="fa-brands fa-whatsapp fs-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="text-white my-5" />

                    <div className="row justify-content-around text-white text-center">

                        <div className="col-lg-4 col-md-5 col-sm-12 text-white-50">
                            <img
                                src="src\assets\imgs\img_home\img_logo_footer.png"
                                alt="logo-footer"
                                className="rounded w-50 mb-2"
                                aria-label='immagine_logo_idraulico_nicotra'
                            />
                            <p>Viale Mario Rapisardi, 523 Catania (CT)</p>
                        </div>

                        <div className="col-lg-4 col-md-5 col-sm-12 text-white-50 mt-4">
                            <h3 className='mb-3'>Idraulico Nicotra</h3>
                            <h6>© 2025 Idraulico Nicotra – Tutti i diritti riservati</h6>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
