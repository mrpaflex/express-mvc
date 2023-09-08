//const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const connectDB = require('./config/database.js');
const serverhomesRoutes = require('./serverRoute/home.js');
const servertodosRoutes = require('./serverRoute/todos.js');

const PORT = 3030;
require('dotenv').config({path: './config.env'})

connectDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use(bodyParser.urlencoded({
//     extended: true,
// }))
app.use(express.urlencoded({extended: true}))//this two line of code replace body-parser
app.use(express.json())

app.use('/', serverhomesRoutes);
app.use('/todos', servertodosRoutes);


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`i am just running on port, ${PORT} please use me`)
})