const express = require ('express');
const router = express.Router();
const bcrypt= require('bcrypt');

const {User} = require ("../models/user");

router.post('/register',async (req,res)=>{

const salt = await bcrypt.genSalt(10)  
const hash =bcrypt.hashSync(req.body.password,salt);
console.log(req.body);


try {
    let user = await User.create(req.body);
    return res.json(user);

}catch(err){
    return res.status(400).send(err);
}


});

module.exports = router;