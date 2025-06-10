const mongoose = require('mongoose')
const { DB_URL } = require('./server-config')


async function connetToDb(){
    await mongoose.connect(DB_URL,)
}

module.exports = connetToDb