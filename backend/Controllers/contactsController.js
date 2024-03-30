const Contact = require("../Models/Contact");

async function getAllContacts(req, res){
    try{
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }catch(error){
    }
}

async function addContact(req, res){
    try{
        const c = req.body;
        Contact.create(c);
        const contacts = await Contact.find();
        res.json(contacts)
    }catch{
        res.status(500).send("erreur dans le serveur.")
    }
}

async function updateContact(req, res){
    const idP = req.params.id;
    const c = req.body
    await Contact.findByIdAndUpdate(idP, c);
    const contacts = await Contact.find();
    res.json(contacts);
    
}

async function deleteContact(req, res){
    const idP = req.params.id;
    await Contact.findByIdAndDelete(idP);
    const contacts = await Contact.find();
    res.json(contacts);
}

module.exports={getAllContacts, addContact, deleteContact, updateContact};