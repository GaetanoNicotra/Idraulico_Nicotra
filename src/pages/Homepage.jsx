import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Homepage = () => {
    return (
        <>
            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
                        <img src="src\assets\imgs\img_home\img_home.jpg" alt="immagine_ufficio" className='jumbotron w-75 rounded' />
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12 px-3'>
                        <h4 className='border-custom pb-4 fw-semibold'>Chi siamo</h4>
                        <p>
                            L’<strong>Idraulico Nicotra</strong>, con sede storica in
                            <strong> Viale Mario Rapisardi 523 a Catania</strong>, è un punto di riferimento
                            nel settore da oltre <strong>50 anni</strong>. Grazie a una lunga tradizione familiare
                            e a una costante dedizione al lavoro, l’azienda ha maturato un’esperienza solida
                            e riconosciuta non solo nella città di Catania, ma anche oltre i confini provinciali.
                        </p>
                        <p>
                            Da sempre contraddistinto da <strong>tempestività negli interventi</strong> e
                            <strong> disponibilità verso il cliente</strong>, Nicotra offre consulenze
                            sia in loco che telefoniche, mettendo a disposizione la competenza e
                            la professionalità acquisite nel corso degli anni.
                        </p>
                        <p>
                            L’impresa opera con successo nel settore degli
                            <strong> impianti idraulici civili e industriali</strong>, vantando una vasta
                            esperienza di cantiere maturata attraverso la
                            <strong> realizzazione di centinaia di impianti</strong> in abitazioni di nuova
                            costruzione e in interventi di ristrutturazione.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-section-home' id="services" >
                <ServiceCard />
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-12"><h4 className="mb-4 mt-5 pb-4 fw-semibold" id='border-custom'>Dove trovarci</h4></div>
                    <div className="col-lg-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9726491685838!2d15.054087776294757!3d37.508563227449606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2c9f717c5ed%3A0xd20c4afbb8f3a170!2sIdraulico%20Nicotra!5e0!3m2!1sit!2sit!4v1761840473196!5m2!1sit!2sit" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map' title="Mappa interattiva - Idraulico Nicotra a Catania"
                            aria-label="Mappa della posizione dell'Idraulico Nicotra a Catania"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
