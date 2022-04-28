import mongoose, { Schema } from 'mongoose'

interface IProduct extends Partial<mongoose.Document> {
	id: number
	brand: string
	description: string
	image: string
	price: number
}

const ProductSchema = new Schema<IProduct>({
	id: {
		type: Number,
	},
	brand: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	price: {
		type: Number,
	},
}, {
	timestamps: false,
})

const Product = mongoose.model<IProduct>('Product', ProductSchema)

export default Product

export {
	IProduct,
	ProductSchema,
	Product,
}