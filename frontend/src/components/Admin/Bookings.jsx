import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Bookings() {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [bookings, setBookings] = useState([]);
  const http = axios.create({
    baseURL: "http://localhost:5000",
    headers: { "Content-Type": "application/json" }
  })
  const navigate = useNavigate()

  const accepted = localStorage.getItem("accepted")

  useEffect(() => {
    fechBookings()
  }, [])

  async function fechBookings() {
    const resp = await http.get("/bookings")
    console.log(resp)
    setBookings(resp.data)
  }

  const handleView = (id) => {
    navigate(`/dashboard/booking/${id}`)
  }

  return (
    <div>
      {
        bookings.length > 0 ?
          <table id='table-admins' border="1px solid">
            <thead>
              <tr>
                <th>Email</th>
                <th>À</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                bookings.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td> {item.email} </td>
                      <td> {item.cityBooked} </td>
                      <td><button onClick={() => handleView(item._id)}>View</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          :
          <p>Pas de données disponibles...</p>
      }

    </div>
  )
}

export default Bookings