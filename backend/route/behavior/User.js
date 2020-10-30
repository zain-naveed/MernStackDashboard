const userModel = require('../../model/user');
const {getToken} = require('../../authtication/util');


exports.GetUser = async(req,res,next)=>{
    const allUser = await userModel.find({});
    if(allUser){
        res.send(allUser)
    }
};



exports.addUser = async(req,res,next)=>{
    try{
    const Userdata = new userModel({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    const SaveUser = await Userdata.save();
    
    if(SaveUser){
        res.send({
            _id: SaveUser._id,
            name: SaveUser.name,
            email: SaveUser.email,
            password: SaveUser.password,
            token: getToken(SaveUser)
            
        })
    }
    }catch(e){
        console.log(e)
    }
};


exports.loginUser = async(req,res,next)=>{
    var name = req.body.name;
    var password = req.body.password
    try{
    const LoginUser = await userModel.findOne({username:name,password:password});
    if(!LoginUser){
        res.send("User Not found!!")
    }else{
        res.send({
            _id: LoginUser._id,
            name: LoginUser.name,
            email: LoginUser.email,
            password: LoginUser.password,
            token: getToken(LoginUser)
            
        })
    }
    }catch(e){
        console.log(e)
    }
   
}