const router = require("express").Router();
const User = require("../models/user.model")

router.get("/allusers",async(req,res)=>{
    try {
        let users = await User.find({})
        console.log(users)
        return res.status(200).json({msg:"Here are all the users", users})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router