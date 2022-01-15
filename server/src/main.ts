import Express from 'express'
import cors from 'cors'
import http from 'http'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'
import { connect } from './utils/db'
import entities from './models'

import ws from './socket'

export default () => {
  const app = Express()

  const server = http.createServer(app)

  ws(server)

  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(helmet())
  app.use(morgan(':method :url :status (took :response-time ms)'))

  app.use(routes)


  

  const connected = () => {
    server.listen(process.env.PORT, () => {
        console.log(`Server 🚀 @${process.env.PORT}`)
      })
  }

  connect(entities, connected)
}
