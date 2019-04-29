import {Request, Response} from 'express'
import {User, users} from './users'

import * as jwt from 'jsonwebtoken'
<<<<<<< HEAD
=======
import {apiConfig} from './api-config'
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb

export const handleAuthentication = (req : Request, resp : Response) => {
  const user: User = req.body
  if (isValid(user)) {
    const dbUser : User = users[user.email]
<<<<<<< HEAD
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, 'meat-api-password')
=======
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, apiConfig.secret)
>>>>>>> 46459edbcde68d96c822977613d1817f7672a9eb
    resp.json({name : dbUser.name, email : dbUser.email, acessToken: token})
  } else {
    resp.status(403).json({message: 'Dados inválidos.'})
  }
}

function isValid(user: User): boolean{
  if (!user) {
    return false;
  }
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.matches(user)
}
