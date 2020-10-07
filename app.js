const express = require("express");
const app = express();
const mongoose = require("mongoose");

require('dotenv/config');

//mddlewares
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

//import route as middleware
const postsRoute = require('./routes/posts');
const usersRouter = require('./routes/users');

app.use('/posts', postsRoute);
app.use('./users', usersRouter)

//ROUTES
app.get('/', (req, res)=>{
    res.send('We are on home')
})

//Connect to db 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true,useNewUrlParser: true  },()=>
        console.log('connected to db')
)


//Listning the server
app.listen(3000)