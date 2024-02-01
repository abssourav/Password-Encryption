require('dotenv').config()
const express = require('express')
const cors = require('cors')

const dev = require('./config/config')
const Users = require('./models/users.model')
require('./config/db')


const app = express()



app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())




//users register
app.post('/register',async (req,res)=>{
    try {
        const {email,password} = req.body ;
        const newUser = new Users({email,password})
        await newUser.save()
        res.status(201).send("Signup Successfull")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
    
});


//users login
app.post('/login',async (req,res)=>{
    const {email,password} = req.body ;
    try {
        const user = await Users.findOne({email:email})
        if(user && user.password == password){
            res.status(200).send("User validation successfull")
        }else{
            res.status(404).send("User validation failed")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
    
});


//Home Route
app.get('/',(req,res)=>{
    res.status(200).send("Home Route");
});

//Route not found error
app.use((req,res,next)=>{
    res.status(404).send("Route Not Found");
});

//Server error handle
app.use((err,req,res,next)=>{
    res.status(500).send("Something broke");
});


app.listen(dev.app.port , ()=>{
    console.log(`Your server running at http://127.0.0.1:${dev.app.port}`)
 
})