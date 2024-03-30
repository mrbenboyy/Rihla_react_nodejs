import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/Hassan2.jpg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function BookingSuccess() {
    const fullName = localStorage.getItem("fullName");
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                HeroImg={AboutImg}
                title="Awesome!"
                btnClass="hide"
            />
            <div className='form-container'>
                <h1>Merci {fullName} pour la planification.</h1>
                <h1>Votre réservation a été effectuée.</h1>
                <Link to="/" style={{"textDecoration": "none"}}><button>Retour à la page d'accueil</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default BookingSuccess