import { createConnection } from 'typeorm'

export const connect = (entities: any[], cb: () => void) => {
  const config = {
    type: 'cockroachdb',
    host: process.env.COCKROACHDB_HOST,
    port: process.env.COCKROACHDB_PORT,
    username: process.env.COCKROACHDB_USERNAME,
    password: process.env.COCKROACHDB_PASSWORD,
    database: process.env.COCKROACHDB_DATABASE,
    entities,
    synchronize: true,
    logging: false,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }

  return createConnection(config as any)
    .then(() => console.log('Connected to 🪳DB'))
    .then(cb)
    .catch(console.error)
}
