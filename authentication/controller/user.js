const usermodel = require("../models/user");
const moviemodel  = require("../models/movie")
const jwt =require('jsonwebtoken')
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const user = new usermodel({ name, email, password });
    await user.save();
    
    res.status(201).json({message: "user registerd successfully"});
  } catch (error) {
    res.status(500).send("Error registering user: " + error.message);
  }
}
async function login(req,res){
    try {
        
        const {email,password}=req.body;
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).send("User not found");
        }
        if(user.password === password){
            
           let token  = jwt.sign({
            userid :user._id
              }, 'secret', { expiresIn: '7d' });

            res.send({message:'Login successfull', token:token})
        }
    
    } catch (error) {
        res.status(500).send("Error logging in user: " + error.message);
        
    }
}
const getLogin = async(req, res)=>{
    try {
        const userId = req.user.userid;
       
        const user = await usermodel.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);

    } catch (error) {
        res.status(500).send("Error getting user: " + error.message);
        
    }
}
async function CreateMovies(req, res){
    try {
    
      let movies =   await moviemodel.create(req.body)
      return res.send({message:"movies created", movies:movies});
    
    } catch (error) {
        res.send({message:'creation faild!', error:error})
        console.log(error.message)
    }
}
async function getalldata(req, res) {
  try {
    const users = await moviemodel.find()
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: "Items not found", error });
  }
}

module.exports = {register,login, getLogin,getalldata,CreateMovies}