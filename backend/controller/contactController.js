
const contactSchema = require("../model/contactSchema")

exports.contactForm = async (req,res)=>{
    try{

        let response = req.body;
        await contactSchema.create(response)
        return res.status(200).json({message:"message send successfully"})
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).json({message:"message not delivered"})
    }
}