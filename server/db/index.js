import mongodb from 'mongoose'

const { connect, connection } = mongodb

connect('mongodb://mongo:27017/survey').then(() => {
  console.log('Mongodb connected!');
}).catch(e => {
  console.error('Connection error:', e.message)
})

connection.on('connected', () => {
  console.log('Mongoose connected to db...')
})

connection.on('error', err => {
  console.log(err.message)
})

connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected!')
})

process.on('SIGINT', () => {
  connection.close(() => {
    console.log(
      'Mongoose connection is disconnected due to app termination!'
    );
    process.exit(0)
  })
})

const db = connection

export default db
