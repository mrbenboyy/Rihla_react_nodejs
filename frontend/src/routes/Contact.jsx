import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/contact-banner.jpg';
import Footer from '../components/Footer';
import ContactFrom from '../components/ContactFrom';

export default function Contact() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <>
   <Navbar/>
   <Hero
    cName="hero-mid"
    HeroImg={AboutImg}
    title="Contact"
    btnClass="hide"
   />
   <ContactFrom/>
   <Footer/>
   </>
  )
}
