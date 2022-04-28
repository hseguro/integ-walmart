import dotenv from 'dotenv'
dotenv.config()
import App from './server'
import connectToDatabase from './database'

const main = async () => {
	await connectToDatabase()

	App.listen(8080)
}

main()