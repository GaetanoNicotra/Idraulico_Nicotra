import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = () => {
    return (
        <div className="container mb-5">

            <div className="row">

                <div className="col-lg-12"><h4 className="mb-5 mt-5 pb-4" id='divisore'>I nostri servizi </h4></div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pageImpianti' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Impianti </h5>
                            <img src="/src/assets/imgs/img_home/img_impianti.webp" alt="Impianti" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Bagni' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Bagni</h5>
                            <img src="/src/assets/imgs/img_home/img_bagno.webp" alt="Bagni" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Box-doccia' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Box-Doccia</h5>
                            <img src="/src/assets/imgs/img_home/box_img.webp" alt="Box Doccia" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Autoclavi' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Autoclavi</h5>
                            <img src="src/assets/imgs/img_home/img_autoclave.png" alt="Autoclavi" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Contatori' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Contatori</h5>
                            <img src="src/assets/imgs/img_home/img_contatori.jpg" alt="Contatori" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-lg-4 col-md-4 mb-4 text-center">
                    <div className="card-servizi position-relative">
                        <Link to='/pagina-Ristrutturazioni' className='text-decoration-none text-white'><h5 className="text-overlay rounded">Ristrutturazioni</h5>
                            <img src="src/assets/imgs/img_home/img_ristrutturazione.jpg" alt="Ristrutturazioni" className="img-fluid rounded" /></Link>
                    </div>
                </div>

                <div className="col-12 text-center mt-4 mb-5">
                    <details>
                        <summary className="fw-semibold">Altri servizi </summary>
                        <p className='mt-3'>Riparazioni idrauliche</p>
                        <p>Manutenzione ordinaria</p>
                        <p>Sostituzione rubinetteria e sanitari</p>
                        <p>Installazione scaldabagni</p>
                        <p>impianti di irrigazione</p>
                        <p>Trasformazione vascha da bagno in doccia</p>
                        <p>Impianti gas</p>
                        <p>Emergenze 24h</p>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
