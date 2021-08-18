const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Nodemy', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect SuccessFully!!!')
    } catch {
        console.log('Connect Failable!!!')
    }
}

module.exports = { connect }