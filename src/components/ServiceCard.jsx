import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = () => {
    return (
        <div className="container mb-5">

            <div className="row">

                <div className="col-lg-12"><h3 className=" mt-5 pb-4 fw-semibold" id='border-custom'>I nostri servizi </h3>
                    <p className='mb-5 mt-3'>Clicca su un servizio per scoprire di più.</p>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pageImpianti' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Impianti </h5>
                            <img src="/imgs/img_home/img_impianti.webp" alt="Impianti" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Bagni' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Bagni</h5>
                            <img src="/imgs/img_home/img_bagno.webp" alt="Bagni" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Box-doccia' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Docce</h5>
                            <img src="/imgs/img_home/box_img.webp" alt="Box Doccia" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Autoclavi' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Autoclavi</h5>
                            <img src="/imgs/img_home/img_autoclave.png" alt="Autoclavi" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Contatori' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Contatori</h5>
                            <img src="/imgs/img_home/img_contatori.jpg" alt="Contatori" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Ristrutturazioni' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Ristrutturazioni</h5>
                            <img src="/imgs/img_home/img_ristrutturazione.jpg" alt="Ristrutturazioni" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="mx-auto col-lg-6 col-sm-12 text-center mt-4 mb-5 lh-lg">
                    <h5 className="fw-semibold mb-3">Altri servizi <br /><i className="fa-solid fa-chevron-down mt-3 fs-4 color-red"></i></h5>
                    <div>
                        <p> <b>Manutenzione ordinaria: </b>
                            riparazione cassette WC,
                            eliminazione perdite,
                            sostituzione rubinetterie e sanitari,
                            trattamento anticalcare sanitari.</p>
                        <b>-</b> Installazione <u>riduttori di pressione idrici.</u> <br />
                        <b>-</b> Installazione <u>scaldabagni</u> <b>elettrici</b> ed a <b>gas</b>. <br />
                        <b>-</b> Installazione <u>climatizzatori</u> e <u>caldaie</u> a <b>gas</b>. <br />
                        <b>-</b> Installazione, sostituzione e manutenzione <u>autoclavi</u>. <br />
                        <b>-</b> Installazione <u>addolcitori</u> per acqua. <br />
                        <b>-</b> <u>Trasformazione</u> vasca da bagno in <b>doccia</b>. <br />
                        <b>-</b> Proggettazione e realizzazione <u>impianti di irrigazione.</u> <br />
                        <b>-</b> Preventivi e consulenza <b>gratuita</b>.<br />
                        <b>- Pronto intervento</b>.</div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
