import express from "express";
import { createContact, deleteContact, getAllContacts } from "../controllers/contactController.js";



const contactRouter = express.Router();

contactRouter.post("/contact", createContact);
contactRouter.get("/getcontacts",  getAllContacts);
contactRouter.delete("/deletecontact/:id", deleteContact);

export default contactRouter;
