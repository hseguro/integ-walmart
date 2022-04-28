import mongoose from 'mongoose'

const connectToDatabase = async () => {
	await mongoose.connect(process.env.MONGO_URI as string)
}

export default connectToDatabase

export {
	connectToDatabase,
}