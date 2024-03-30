import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import Banner from '../assets/images/banner.png'

export default function Home() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
   <>
   <Navbar/>
   <Hero
    cName="hero"
    HeroImg={Banner}
    text="Choisissez Votre Destination Préférée."
    slogan="Book now, Pay later."
    buttonText="Travel Plan"
    url="/"
   />
   <Destination/>
   <Trip/>
   <Footer/>
 </>
  )
}
