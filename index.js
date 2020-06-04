const express = require('express')
const bodyParser = require('body-parser')

const db = require('./config/db')

require('./models/Consumos')
require('./models/Usuario')

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.log(error))

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/consumos', require('./routes/consumos'))
app.use('/api/precios', require('./routes/precios'))
app.use('/api/series', require('./routes/series'))
app.use('/api/vehiculos', require('./routes/vehiculos'))



app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000)