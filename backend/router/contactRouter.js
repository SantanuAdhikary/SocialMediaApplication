const Router = require("express")
const { contactForm } = require("../controller/contactController")


let router = Router()


router.post("/contact",contactForm)

module.exports= router