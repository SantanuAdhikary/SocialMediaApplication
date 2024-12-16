const {Schema, model} = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

let userSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.pre('save',async function(){
    let salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
})


userSchema.methods.comparePassword = async function (pass)
{
    try{
        return bcrypt.compare(pass,this.password)
    }
    catch(err)
    {
        console.log(err)
    }
}

userSchema.methods.generateToken = async function (){
    try{
        return jwt.sign(
            {
                userId : this._id.toString(),
                email:this.email,
                isAdmin:this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn:"30d"
            }
        )
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = model("users",userSchema)