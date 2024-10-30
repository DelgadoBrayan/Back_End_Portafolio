import ContactCompany from "../Models/contactCompany.js";


export const getContact = async (req, res) => {
    try {
        const contacts = await ContactCompany.find();
        res.status(200).json({
            contacts,
            msg:"contactos obtenidos correctamente"
        });
    } catch (error) {
        console.error("Error al obtener los contactos:", error);
        res.status(500).json({ message: "Error al obtener los contactos" });
    }
};


export const postContact = async (req, res) => {
    try {
        const newContact = new ContactCompany(req.body);
        await newContact.save();
        res.status(201).json({
            newContact,
            msg:"Contacto creado correctamente"
        });
    } catch (error) {
        console.error("Error al crear el contacto:", error);
        res.status(500).json({ message: "Error al crear el contacto" });
    }
};
