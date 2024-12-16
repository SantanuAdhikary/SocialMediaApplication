
const ErrorResponse = require("../middleware/ErrorResponse");
const userSchema = require("../model/userSchema")

exports.register = async(req,res)=>{
    try{

        let user = req.body;

        let {username,email,password,isAdmin} = user

        let userPresent =await userSchema.findOne({email:email})
        
        if(userPresent)
        {
            res.status(404).json({message:"email already registered.."})
        }
        else{


            let payload = await userSchema.create(user);
            let token = await payload.generateToken();
            res.status(201).json({message:"registered successfully",token})
        }   

    }
    catch(err)
    {
        console.log(err)
    }
}


exports.login = async (req, res,next) => {
    try {
      const { email,password} = await req.body;
  
      if (!email || !password) {
        next(new ErrorResponse("both the field should be present",400))
      } else {
        let user = await userSchema.findOne({ email }).select("+password");
  
        if (!user) {
          next(new ErrorResponse("wrong user",401))
        } else {
          //    const isMatch = await bcrypt.compare(pass,user.pass);
  
          const isMatch = await user.comparePassword(password);
  
          if (!isMatch) {
              next(new ErrorResponse("wrong password",401))
          } else {
            let token = await user.generateToken();
            res
              .status(200)
              .json({ message: "successfully login", success: true, token});
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };


  exports.user = async(req,res)=>{

    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({  userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }

  }


