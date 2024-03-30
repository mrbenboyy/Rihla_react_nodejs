import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from './Hero';
import AboutImg from '../assets/images/contact-banner.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './ContactSuccessStyle.css';

function ContactSuccess() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const name = localStorage.getItem("contactName").toUpperCase();
    const removeContactName = () => {
        localStorage.removeItem("contactName");
    }
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                HeroImg={AboutImg}
                title="Contact"
                btnClass="hide"
            />
            <div id='message'>
                <h1>Merci {name} De Nous Contacter</h1>
                <p>Votre soutien et votre confiance en nous sont très appréciés.</p>
            <Link to="/" onClick={() => removeContactName()}><button>Retour à la page d'accueil</button></Link>
            </div>
            <Footer />
        </>
    )
}

export default ContactSuccess