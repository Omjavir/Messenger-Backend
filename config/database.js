const mongoose = require('mongoose')

const database = async () => {
    try {
        const url = await mongoose.connect('mongodb://localhost:27017/Messenger', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Database Connected Successfully : ${url.connection.host}`);
    } catch (error) {
        console.log("Database connection error:", error);
    }
}

module.exports = database;