const express =require('express');
const app=express();
const bodyParser=require('body-parser');
const AuthRouter=require('./Routes/AuthRouter.js')
const ExRouter=require('./Routes/ExRouter.js')
const cors=require('cors');

require('dotenv').config();
require('./Models/db.js');

const PORT = process.env.PORT ||3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)
app.use('/home',ExRouter)


app.listen(PORT,()=>{
    console.log('Server is running on ')
})
