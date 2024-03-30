import React, { useState } from 'react'
import './ContactFromStyles.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ContactFrom() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const http = axios.create({
    baseURL: "http://localhost:5000",
    headers : {"Content-Type": "application/json"}
  });
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    const contact = {"name": name, "email": email, "subject": subject, "message": message};
    await http.post('/contacts', contact);
    navigate('/contact-success');
    localStorage.setItem("contactName", name);
  }

  return (
    <div className='form-container'>
        <h1>Envoyez-nous un message !</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type='text' placeholder='Nom' onChange={(e) => {setName(e.target.value)}}/>
            <input placeholder='Email' onChange={(e) => {setEmail(e.target.value)}} />
            <input placeholder='Sujet' onChange={(e) => {setSubject(e.target.value)}} />
            <textarea placeholder='Message' rows='4' onChange={(e) => {setMessage(e.target.value)}}></textarea>
            <button>Envoyer Message</button>
        </form>
    </div>
  )
}

export default ContactFrom