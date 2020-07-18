## Back-end for [Face-app](https://github.com/nuggetnchill/facial-recognition-app)

Deployed Site: https://face-regconition-app.herokuapp.com/

![Screenshot](https://media3.giphy.com/media/lly8nGVYgYPSTZwNMx/giphy.gif)

------


(Use this login if you don't want to register)

`email: hello@gmail.com`

`pass: hello`

### Description

This repo shows how the server is set up, routing of the app, and how it connects to the front-end.

### Features:
- Node, Express, Knex
- Heroku Deployment, Heroku Postgres for users database
- Security: 
  - User passwords are hashed with [Bcrypt.js](https://www.npmjs.com/package/bcrypt)
  - POST requests are never cached, and will not remain in the browser history
