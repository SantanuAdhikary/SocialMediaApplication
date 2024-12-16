const Router = require("express")
const { register, login, user } = require("../controller/userController")

const authMiddleware = require("../middleware/authMiddleware")

let router = Router()


router.post("/register",register)
router.post("/login",login)

router.get("/user",authMiddleware,user)

module.exports= router