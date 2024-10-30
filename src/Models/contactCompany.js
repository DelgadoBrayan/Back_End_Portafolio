import mongoose from "mongoose";


const contactCompany = mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            require:true
        },
        email:{
            type:String,
            trim:true,
            require:true
        },
        message:{
            type:String,
            trim:true,
            require:true
        },
    },
    {
        timestamps: true,
    }
)


const ContactCompany = mongoose.model('contactCompany', contactCompany)

export default ContactCompany