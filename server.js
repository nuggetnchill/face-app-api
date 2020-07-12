const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex= require('knex');

const register = require('./controllers/register');
const signin = require ('./controllers/signin');
const profile = require ('./controllers/profile');
const image = require ('./controllers/image');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 

const db = knex({
  client: "pg",
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.select('*').from('users').then(data =>{
    console.log(data)
});

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => { res.send('server.js (nothing to see here)') })
app.post('/signin', signin.handleSignin(db, bcrypt) )
app.post('/register', register.handleRegister(db, bcrypt) )
app.get('/profile/:id', profile.handleProfileGet(db) )
app.put('/image', (req, res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3001, () => {
    console.log(`App is running on port 3001 ${process.env.PORT}`)
})

/*  ROUTES
/ ---> res =  this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/ :userId --> GET = user
/image --> PUT --> user

*/