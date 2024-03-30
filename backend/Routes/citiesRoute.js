const express = require("express");
const router = express.Router(); //importation du route
const cityController = require("../Controllers/citiesController"); //importation du controller
const multer = require("multer")

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "C:/Users/Hakim/Desktop/Projet rihla/alrihla/backend/uploads")
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage:storage})

//creation des routes
router.get("/cities", cityController.getAllCities);
// router.get("/cities/:id", cityController.getProductById);
// router.get("/cities/:title", cityController.searchCity);
router.post("/cities",upload.single('cityImage') ,cityController.addCity);
router.put("/cities/:id", cityController.updateCity);
router.delete("/cities/:id", cityController.deleteCity);

module.exports=router; //exportation du route