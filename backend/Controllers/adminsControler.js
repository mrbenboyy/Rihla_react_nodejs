const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const Admin = require('../Models/Admin');

async function getAllAdmins(req, res){
    try{
        const admins = await Admin.find();
        res.status(200).json(admins);
    }catch(error){
    }
}

async function addAdmin(req, res){
    try{
        const adm = req.body;
        const salt = await bcrypt.genSalt();
        adm.password = await bcrypt.hash(adm.password, salt);
        Admin.create(adm);
        const admins = await Admin.find();
        res.json(admins)
    }catch{
        res.status(500).send("erreur dans le serveur.")
    }
}

async function adminLogin(req, res){
    try {
        const admin = await Admin.find({"email": req.body.email});
        if(admin.length>0){
            const result = await bcrypt.compare(req.body.password, admin[0].password)
            if(result){
                //login et password sont corect.
                jwt.sign({"email":admin[0].email}, process.env.SECRET_KEY, {expiresIn: "1h"}, (err, token) => {
                    if(err) throw err;
                    res.cookie('token', token).json(admin);
                })
                // res.status(200).json(token);
            }else{
                res.status(401).json("Login ou mot de passe incorrect!!!")
            }
        }else{
            res.status(401).json("Login ou mot de passe incorrect!!!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function updateAdmin(req, res){
    const idP = req.params.id;
    const adm = req.body
    await Admin.findByIdAndUpdate(idP, adm);
    const admins = await Admin.find();
    res.json(admins);
    
}

async function deleteAdmin(req, res){
    const idP = req.params.id;
    await Admin.findByIdAndDelete(idP);
    const admins = await Admin.find();
    res.json(admins);
}

module.exports={getAllAdmins, addAdmin, deleteAdmin, updateAdmin, adminLogin};