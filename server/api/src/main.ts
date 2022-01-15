import Express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'
import { connect } from './utils/db'
import entities from './models'

export default () => {
  const app = Express()

  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(helmet())
  app.use(morgan(':method :url :status (took :response-time ms)'))

  app.use(routes)


  const connected = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server 🚀 @${process.env.PORT}`)
      })
  }

  connect(entities, connected)
}
