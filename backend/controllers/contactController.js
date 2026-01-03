import Contact from "../models/contactModel.js";


/* CREATE CONTACT */
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      success: true,
      message: "Contact submitted successfully",
      contact
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact"
    });
  }
};

/* GET ALL CONTACTS (ADMIN) */
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts"
    });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete contact"
    });
  }
};

