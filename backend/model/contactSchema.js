const {Schema,model} = require("mongoose")

const contactSchema = new Schema({
    username : {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
})

module.exports = model('contacts',contactSchema)