import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

import db from './db/index.js'
import responseRouter from './routes/response-router.js'

db.useDb(process.env.DB_NAME)

const { urlencoded, json } = bodyParser
const app = express()
const host = '0.0.0.0'
const apiPort = process.env.PORT || 5000

app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(json())

app.get('/', (_req, res) => {
  res.send('Survey JS!')
})

app.use('/api', responseRouter)

app.listen(apiPort, host, () => console.log(`Server running on port ${apiPort}`))
