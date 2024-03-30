import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/about-banner.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

export default function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  return (
    <>
   <Navbar/>
   <Hero
    cName="hero-mid"
    HeroImg={AboutImg}
    title="About"
    btnClass="hide"
   />
   <AboutUs/>
   <Footer/>
   </>
  )
}
