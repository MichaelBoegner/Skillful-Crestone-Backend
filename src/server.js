const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
// const { Client } = require('pg')

app.use(cors());

var corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/something', cors(corsOptions), (req, res) => {
          res.send('hello fools')
      })

app.listen(port, () => console.log(`Skillful Crestone Server listening at http://localhost:${port}`))




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
