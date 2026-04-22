const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel')


const userRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userExists =await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email
        })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
}


const userLogin = async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({message:"Email or Password required"});
    }

    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"User does not exists"});
    }

    const isMatch =await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Incorrect Password"});
    }

    const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
    )

    return res.status(200).json({
        id:user._id,
        name:user.name,
        email:user.email,
        token
    })
}

module.exports = { userRegister,userLogin };