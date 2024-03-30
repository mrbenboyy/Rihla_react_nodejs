const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactsController");


router.get("/contacts", contactController.getAllContacts);
router.post("/contacts", contactController.addContact);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);

module.exports=router;