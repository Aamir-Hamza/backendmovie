
const jwt = require('jsonwebtoken')
const authmiddleware =async(req, res, next)=>{
    let token = req.headers.authorization.split(' ')[1];
    console.log(token)
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        console.log({mesage:"validation faild!", error})
    }
}
module.exports  = authmiddleware
