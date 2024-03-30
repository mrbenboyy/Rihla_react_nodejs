const City = require("../Models/City");

async function getAllCities(req, res){
    try{
        const cities = await City.find();
        res.status(200).json(cities);
    }catch(error){
    }
}

// async function getProductById(req, res){
//     const idP = req.params.id;
//     const c = await City.findById(idP);
//     res.json(c);
// }

async function addCity(req, res){
    try{
        const c = JSON.parse(req.body.cityData);
        c.image = "/uploads/"+req.file.originalname
        City.create(c);
        const cities = await City.find();
        res.json(cities)
    }catch{
        res.status(500).send("erreur dans le serveur.")
    }
}

async function updateCity(req, res){
    const idP = req.params.id;
    const c = req.body
    await City.findByIdAndUpdate(idP, c);
    const cities = await City.find();
    res.json(cities);
    
}

async function deleteCity(req, res){
    const idP = req.params.id;
    await City.findByIdAndDelete(idP);
    const cities = await City.find();
    res.json(cities);
}

// async function searchCity(req, res){
//     const title = req.params.title;
//     const search = await City.find((item) => item.title === title);
//     res.json(search);
// }

module.exports={getAllCities, addCity, deleteCity, updateCity};