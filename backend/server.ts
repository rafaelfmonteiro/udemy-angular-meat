import * as jsonServer from 'json-server'
import {Express} from 'express'

import * as fs from 'fs'
import * as https from 'https'

import {handleAuthentication} from './auth'
<<<<<<< HEAD
=======
import {handleAuthorization} from './authz'
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)

//middlewares para login
<<<<<<< HEAD
server.post('/login', handleAuthentication )
=======
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb

// Use default router
server.use(router)

const options = {
  cert : fs.readFileSync('./backend/keys/cert.pem'),
  key : fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running https://localhost:3001')
})
