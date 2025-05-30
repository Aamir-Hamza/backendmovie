const express  = require("express")
const router  = express.Router()
const middlerware  = require("../middleware/auth")
const controllered = require("../controller/user")
router.post("/register",controllered.register)
router.post("/login",controllered.login)
router.get("/getuser",middlerware,controllered.getLogin)
router.get("/getitem",controllered.getalldata)
router.post('/create/movies', controllered.CreateMovies)
module.exports  = router