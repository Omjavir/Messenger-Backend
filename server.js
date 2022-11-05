const express = require('express')
const app = express()
const database = require('./config/database')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require("./routes/chatRoutes")
const messageRoutes = require("./routes/messageRoutes")
const cors = require('cors')
const dotenv = require('dotenv');

database();
dotenv.config();

app.use(express.json())
app.use(cors())
app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)

app.get('/', (req, res) => {
    res.send('Hello Express Routes')
})

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
})