const jwt = require('jsonwebtoken');

const getToken = (user)=>{
    // console.log(user)
    return jwt.sign(
        {
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password
        },
        'Some Secret',
        {
            expiresIn: '48h'
        }
    );
};
const auth = (req,res,next)=>{
    try{
    const token = req.headers.authorization
    if(token){
        const onlyToken = token.split(" ")[1];
        jwt.verify(onlyToken,'Some Secret',(err,decode)=>{
                if(err){
                   return res.send("invalid token")
                }
                req.user = decode;
        })
        // console.log(onlyToken)
        next();
        return
    }else{
        return res.send("token is not supplied")
    }
}catch(e){
    console.log(e)
}
}
module.exports = {getToken,auth};