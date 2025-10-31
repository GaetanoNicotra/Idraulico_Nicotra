import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="row bg-footer p-5">
                <div className="col-lg-12 footer d-flex">

                    <div className="col-lg-12 d-flex justify-content-around mt-4 mb-5">
                        <ul className='list-unstyled text-white'>
                            <li className='pb-3'><h4>Contatti</h4></li>
                            <li><i className="pb-3 fa-solid fa-mobile-screen-button"></i> 338 772 5379</li>
                            <li><i className="pb-3 fa-solid fa-phone"></i> 095 351 281</li>
                            <li><i className="pb-3 fa-regular fa-envelope-open"></i> raimonicotra@virgilio.it</li>
                        </ul>

                        <ul className='list-unstyled text-white'>
                            <li className='pb-3'><h4>I Nostri orari</h4></li>
                            <li className='pb-3'>Lunedi - Venerdi : 8:00 - 19:00</li>
                            <li className='pb-3'>Sabato: 8:00 - 13:00</li>
                            <li className='pb-3'>Domenica: Chiusi</li>

                        </ul>

                        <ul className='list-unstyled text-white'>
                            <li className='pb-2'><h4>Social</h4></li>
                            <li className='text-center'>
                                <i className="fa-brands fa-whatsapp pe-5"></i>
                                <i className="fa-brands fa-facebook-f"></i>
                            </li>

                        </ul>
                    </div>
                </div>

                <hr className='text-white' />
                <div className='text-white d-flex justify-content-around col-lg-12 mt-5'>
                    <div className='text-white-50'>
                        {/* <img src="src/assets/imgs/logo_footer.png" alt="logo-footer" className='rounded w-25' /> */}
                        <h3>Idraulico Nicotra</h3>
                        <p>Viale Mario Rapisardi, 523 Catania (CT)</p>
                    </div>
                    <div className='text-white-50'>
                        <p>Idraulico Nicotra 2025-2025</p>
                        <h6>© [2025] [Idraulico Nicotra] – Tutti i diritti riservati</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
