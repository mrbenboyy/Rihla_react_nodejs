import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/booking-banner.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Booking() {
  const cityBooked = localStorage.getItem("cityBooked");
  const http = axios.create({
    baseURL: "http://localhost:5000",
    headers: {"Content-Type": "application/json"}
  })
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const [fullName, setFullName] = useState("");
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [places, setPlaces] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    const newBooking = {"fullName": fullName, "from": from, "email": email, "date": date, "phoneNumber": phoneNumber, "places": places, "cityBooked": cityBooked};
    await http.post("/bookings", newBooking);
    navigate("/booking-success");
    localStorage.setItem("fullName", fullName);
  }

  return (
    <div>
        <Navbar />
        <Hero
            cName="hero-mid"
            HeroImg={AboutImg}
            title="Booking"
            btnClass="hide"
        />
        <div className='form-container'>
            <h1>Entrez Vos Informations De Voyage Pour {cityBooked}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' onChange={(e) => setFullName(e.target.value)} placeholder='Nom Complet' />
                <input type='text' onChange={(e) => setFrom(e.target.value)} placeholder='De' />
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type='date' onChange={(e) => setDate(e.target.value)} />
                <input type='number' onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Numéro De Téléphone' />
                <input type='number' onChange={(e) => setPlaces(e.target.value)} placeholder='Combien De Personnes?' />
                <button>Soumettre</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Booking