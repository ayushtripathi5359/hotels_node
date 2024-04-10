const express = require('express')
const app = express();
const db = require('./db');


const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res)=>{
  res.send('Hello Wold')
})

// post route to add a person

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)

app.listen(3000, ()=>{
  console.log('Server is running on port 3000')
})