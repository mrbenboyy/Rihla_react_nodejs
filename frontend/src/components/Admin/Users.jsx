import React, { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [admins, setAdmins] = useState([])
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [id, setID] = useState(null)
    const http = axios.create({
        baseURL: "http://localhost:5000",
        headers: { "Content-Type": "application/json" }
    })
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchAdmins()
    }, [])

    async function fetchAdmins() {
        const resp = await http.get("/admins")
        console.log(resp)
        setAdmins(resp.data)
    }

    async function handleDelete(id) {
        const resp = await http.delete(`/admins/${id}`);
        setAdmins(resp.data)
    }

    function handleReset() {
        setFullName("")
        setEmail("")
        setPassword("")
        setID(null)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (id) {
            const updatedAdminData = {
                fullName: fullName,
                email: email,
                password: password
            }
            const resp = await http.put(`/admins/${id}`, updatedAdminData, {
                headers: {
                    "Authorization": token
                }
            });
            console.log(resp)
            setAdmins(resp.data)
        } else {

            const newAdmins = {
                fullName: fullName,
                email: email,
                password: password,
            }
            const resp = await http.post(`/admins`, newAdmins, {
                headers: {
                    "Authorization": token
                }
            })
            console.log(resp)
            if (resp.status === 200) {
                fetchAdmins();
            } else {
                console.error("Error adding user");
            }
        }
        handleReset()
    }

    async function handleEdit(id) {
        const updatedAdmin = admins.find((item) => item._id === id)
        setFullName(updatedAdmin.fullName)
        setEmail(updatedAdmin.email)
        setPassword(updatedAdmin.password)
        setID(id)
    }

    return (
        <div>
            <form id='form' onSubmit={(e) => handleSubmit(e)}>
                <table id='tableForm' className='table table-sm'>
                    <tr className='table-success' >
                        <td id='labels'>Nom Complet: </td>
                        <td><input className='form-control' placeholder='John Doe' style={{ width: "200px" }} type='text' onChange={(e) => setFullName(e.target.value)} value={fullName} /></td>
                    </tr>
                    <tr className='table-success'>
                        <td id='labels'>Email: </td>
                        <td><input className='form-control' placeholder='johndoe@gmail.com' style={{ width: "200px" }} type='text' onChange={(e) => setEmail(e.target.value)} value={email} /></td>
                    </tr>
                    <tr className='table-success'>
                        <td id='labels'>Mot De Passe: </td>
                        <td><input className='form-control' placeholder='****' style={{ width: "200px" }} type='password' onChange={(e) => setPassword(e.target.value)} value={password} /></td>
                    </tr>
                </table>
                <div style={{ marginLeft: "-450px", "marginTop": "10px" }}>
                    <button type='submit' style={{ "marginRight": "10px" }}>{id !== null ? "Modifier" : "Envoyer"}</button>
                    <button type='reset' onClick={() => handleReset()}>Annuler</button>
                </div>
            </form><br />
            <center>
                {
                    admins.length > 0
                        ?
                        <table id='table-admins' border="1px solid">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom Complet</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    admins.map((item, index) => {
                                        return (
                                            <tr key={item._id}>
                                                <td> {index + 1} </td>
                                                <td> {item.fullName} </td>
                                                <td> {item.email} </td>
                                                <td>
                                                    <button className='btn btn-primary' onClick={() => handleEdit(item._id)} style={{"marginRight": "10px"}}>Modifier</button>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Supprimer</button> </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <p>No Data Available...</p>
                }
            </center>
        </div>
    )
}

export default User