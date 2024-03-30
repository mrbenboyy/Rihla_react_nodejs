import React, { useEffect, useState } from 'react'
import "./TripStyles.css"
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function Trip() {
    const [cities, setCities] = useState([]);
    const [search, setSearch] = useState("");
    const http = axios.create({
        baseURL: "http://localhost:5000",
        headers: { "Content-Type": "application/json" },
    });

    const location = useLocation();

    useEffect(() => {
        fetchCities();
    }, []);

    async function fetchCities() {
        const resp = await http.get("/cities");
        setCities(resp.data);
    }

    return (
        <div className='trip'>
            <h1>Voyages Récents</h1>
            {location.pathname !== '/' && (
                <input type="text" id='search' onChange={(e) => setSearch(e.target.value)} placeholder='rechercher une ville...' />
            )}
            <div className='tripcard'>
            {
                cities.filter((item) => {
                    if(search == ""){
                        return item
                    }else if(item.title.includes(search.toUpperCase())){
                        return item
                    }
                }).map((item) => {
                    return (
                        <div className='t-card'>
                            <Link id="city" to={`/city/${item._id}`}>
                                <div className='t-image'>
                                    <img src={"http://localhost:5000" + item.image} alt="image" />
                                </div>
                                <h4> {item.title} </h4>
                                <p id='description-city'> {item.description} </p>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Trip