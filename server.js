const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000

const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res)=>{
  res.send('Hello Wold')
})

// post route to add a person

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)


app.listen(PORT, ()=>{
  console.log('Server is running on port 3000')
})