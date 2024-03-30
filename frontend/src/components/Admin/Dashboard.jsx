import React, { useEffect } from 'react'
import './sidebar.css'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Banner from '../../assets/images/Hassan2.jpg'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
    const token = localStorage.getItem("token");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const logout = () => {
        localStorage.removeItem('token');
    }
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                HeroImg={Banner}
                title="Dashboard"
            />
            <div class="sidenav">
                <Link to={"admins"}><i className='fa-solid fa-user' style={{"margin-right": "24px"}}></i>Admins</Link>
                <Link to={"cities"}><i className='fa-solid fa-location-dot' style={{"margin-right": "25px"}}></i>Cities</Link>
                <Link to={"bookings"}><i className='fa-solid fa-calendar-days' style={{"margin-right": "5px"}}></i>Bookings</Link>
               <Link to="/" onClick={() => logout()}><i className='fa-solid fa-right-from-bracket' style={{"margin-right": "25px"}}></i>Logout</Link>
            </div>
            <div class="main">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard