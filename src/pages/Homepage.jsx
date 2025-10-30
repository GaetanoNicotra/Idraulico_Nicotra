import React from 'react'
import ServiceCard from '../components/ServiceCard'

const Homepage = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12 d-flex">
                        <img src="src\assets\imgs\jumbotron-idraulica.png" alt="jumbotron" className='jumbotron' />
                        <div className='px-5'>
                            <h4 className='divisore pb-3'>Chi siamo</h4>

                            <p>l'Idarulico Nicotra con sede storica al Viale Mario Rapisardi 523 è presente sul territorio da oltre 50 anni. Acquisendo esperienza e fama nella città di Catania e fuori provincia. Offriamo tempstivià negli interventi consulenza telefonica oltre all'eseperienza sempre messa a vostra disposizione. Opera nel settore degli impianti idraulici con lunga esperienza di canitere (grazie alla relizzazione di centinaia di impianti in abitaizoni di nuova costruzione e ristrutturazione.)</p>
                        </div>
                    </div>

                    <ServiceCard />
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.9726491685838!2d15.054087776294757!3d37.508563227449606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e2c9f717c5ed%3A0xd20c4afbb8f3a170!2sIdraulico%20Nicotra!5e0!3m2!1sit!2sit!4v1761840473196!5m2!1sit!2sit" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
