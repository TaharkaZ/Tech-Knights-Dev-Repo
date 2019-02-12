import { Application } from 'express'
import express from 'express'
import {Controller} from './api/controller'

export default function routes(app: Application): void {
  const apiRouter = express.Router()
    .get('/hello', Controller.helloWorld)

  app.use('/api', apiRouter)
}
