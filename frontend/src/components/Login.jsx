import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/Hassan2.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const http = axios.create({
        baseURL: "http://localhost:5000",
        headers: {"Content-Type": "application/json"}
    })
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

async function handleSubmit(e){
    e.preventDefault()
    const admin = {"email": email, "password": password}
    const resp = await http.post(`/login`, admin)
    const token = resp.data
    localStorage.setItem("token", token);

    navigate('/dashboard');
}

    return (
        <div>
            <Navbar />
            <Hero
                cName="hero-mid"
                HeroImg={AboutImg}
                title="Login"
                btnClass="hide"
            />
            <div className='form-container'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Mot De Passe' />
                    <button>Login</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login