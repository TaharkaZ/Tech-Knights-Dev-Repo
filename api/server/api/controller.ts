import { Request, Response } from 'express'


export class Controller {
  static helloWorld(req: Request, res: Response): void {
    res.json({ok: true, data: 'Hello, World!'})
  }
}

export default new Controller()
