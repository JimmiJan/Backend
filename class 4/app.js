const express = require("express");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000
const app = express()


const userModel = require("./scema");

// Body Allow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const baseuri = `mongodb+srv://add:add@cluster0.ri5kd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(baseuri)
mongoose.connection.on("connected",()=>{console.log("mongoose connected")})
mongoose.connection.on("error",()=>{console.log(error)})



app.use((req,res,next)=>{
    console.log("hitttt")
    const user = true
    if(user){
        next()
    }else{
        res.send("invalid")
    }

    

})
app.get("/api/user",(req,res)=>{
    res.send("valid Get")
})

app.post("/api/user",(req,res)=>{
    // res.send("hello")
    // console.log('Got body:', req.body);
    // // req.body()
    // // res.json(req.body);
    // // console.log(body)

    const userObj ={
        first_name: req.body.firstName,
    last_name: req.body.lastName,
     email: req.body.email,
    }
    userModal.create(userObj,(error,data)=>{
        if(error){
            req.send(error)
        }else{
            res.send(data)
        }

    })
})
app.listen(PORT ,console.log(`server is running on http://localhost:${PORT}`))