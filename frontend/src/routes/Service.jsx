import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/service-banner.png';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  )
}
