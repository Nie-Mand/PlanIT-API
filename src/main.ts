import Express from 'express'
import cors from 'cors'
import { json } from 'body-parser'
import routes from './routes'
import { connect } from './utils/db'
import entities from './models'

export default () => {
  const app = Express()

  app.use(cors())
  app.use(json())

  app.use(routes)


  const connected = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server 🚀 @${process.env.PORT}`)
      })
  }

  connect(entities, connected)
}
