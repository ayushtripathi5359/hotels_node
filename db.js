const mongoose =require('mongoose');

const mongoURL = 'mongodb://0.0.0.0:27017/hotels'

mongoose.connect(mongoURL
)

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