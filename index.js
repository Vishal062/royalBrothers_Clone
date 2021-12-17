import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/LoginRegisterDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String
});

const User = new mongoose.model("User", userSchema)

//creating routes

app.post("/login", (req, res) => {
    const {mobile, password} = req.body;
    User.findOne({mobile: mobile}, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "Login Successful", user: user});
            } else {
                res.send({message: "Password is Incorrect"});
            }
        } else {
            res.send({message: "User not Registered"});
        }
    })
});

app.post("/register", (req, res) => {
    //res.send("register api");
    const {name, email, mobile, password} = req.body;
    User.findOne({mobile: mobile}, (err, user) => {
        if(user) {
            res.send({message: "User Already Exist"})
        } else {
            const user = new User({
                name,
                email,
                mobile,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err);
                } else {
                    res.send({message: "Registered Successfully"});
                }
            })
        }
    })
    
});

app.listen(3456, ()=> {
    console.log("My port is 3456")
})