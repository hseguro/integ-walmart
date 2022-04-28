import express from 'express'
import api from './routes/api'

const App = express()

App.use('/api', api)

export default App

export {
	App,
}