const { Pool, Client } = require('pg')


export const 
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'postgres',
//   port: 5434,
// })
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
// })
export const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'softylofty',
  password: 'postgres',
  port: 5434,
})
client.connect()
client.query('CREATE TABLE softycreamy (user_id serial PRIMARY KEY,username VARCHAR ( 50 ) UNIQUE NOT NULL,password VARCHAR ( 50 ) NOT NULL,email VARCHAR ( 255 ) UNIQUE NOT NULL,created_on TIMESTAMP NOT NULL,last_login TIMESTAMP);'), (err, res) => {
  console.log(err, res)
}