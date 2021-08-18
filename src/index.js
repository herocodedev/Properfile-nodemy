const express = require('express')
const morgan = require('morgan')
const route = require('./router/index')
const path = require('path')
const db = require('./configs/mongoose')
const app = express()
const port = 3000

// Custome Middleware to parser req.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// Middleware help morgan
app.use(morgan('combined'))

// Connect DB
db.connect()

app.get('/site', function(req, res) {
    var duongdanFile = path.join(__dirname, 'home.html')
    res.sendFile(duongdanFile)
})

// Custom Path
route(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})