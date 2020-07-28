const express = require('express')
const { Client } = require('pg')
const app = express()
const port = 3000

// const client = new Client ({
//     user: 'David',
//     host: 'http://localhost:',
//     database: 'softylofty',
//     password: 'postgres',
//     port: 5434,
// })

// app.post('/create-user', (req, res) => res.send(
//         client() 
//     ))

app.get('/', (req, res) => res.send(
        "Hello is this working" 
))
app.listen(port, () => console.log(`Skillful Crestone Server listening at http://localhost:${port}`))
