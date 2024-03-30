const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminsControler");


router.get("/admins", adminController.getAllAdmins);
router.post("/admins", adminController.addAdmin);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("/admins/:id", adminController.deleteAdmin);
router.post("/login", adminController.adminLogin);

module.exports=router;