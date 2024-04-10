const mongoose =require('mongoose');
require('dotenv').config()

// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB')
})

db.on('error',()=>{
    console.log('MongoDB error')
})

db.on('disconnected',()=>{
    console.log('Disconnected from MongoDB')
})

module.exports = db