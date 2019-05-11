const express = require ('express');
const router = express.router();
const bcrypt= require('bcrypt');

const {User} = require ("../models/user");

router.post('/register',async (req,res)=>{
const hash =bcrypt.hashSync(req.body.password,10);

try {
    let user = await User.create(
        Object.assign(req.body,{password:hash})
    );

    let data =await user.authorize();
    return res.json(data);

}catch(err){
    return res.status(400).send(err);
}


});

module.exports = router;