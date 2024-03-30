import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import './AboutUsStyles.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function SingleCity() {
    const { id } = useParams()
    const [cities, setCities] = useState(null)
    const [city, setCity] = useState(null)
    const http = axios.create({
        baseURL: "http://localhost:5000",
        headers: { "Content-Type": "application/json" },
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchCities();
    }, []);

    async function fetchCities() {
        const resp = await http.get("/cities");
        setCities(resp.data);
        const foundCity = resp.data.find(city => city._id === id);
        setCity(foundCity);
    }

    const handleBooking = () => {
        const cityBooked = city.title
        localStorage.setItem("cityBooked", cityBooked)
        navigate("/booking");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
        <Navbar />
            <div>
                {city ? (
                    <>
                    <Hero
                        cName="hero-mid"
                        HeroImg={`http://localhost:5000${city.image}`}
                        title={city.title}
                        btnClass="hide"
                    />
                        <p className='about-container' id='city-description'>{city.description}</p>
                        <center><iframe src={city.map} width="500" height="250" style={{"border":"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></center>
                    </>
                ) : (
                    <p>Loading city details...</p>
                )}
            </div>
            <button className='booking-button' onClick={() => handleBooking()}>Book Now</button>
            <Footer />
        </div>
    )
}

export default SingleCity