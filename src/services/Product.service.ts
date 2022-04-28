import Product, { IProduct } from '../models/Product'
import { applyDiscount, isPalindrome } from '../utils'

class ProductService {
	static async searchProducts(text: string): Promise<IProduct[]> {
		let products = await Product.aggregate([
			{
				$addFields: {
					id_str: {
						$toUpper: "$id",
					},
				},
			},
			{
				$match: {
					$or: [
						{
							id_str: {
								$regex: text,
								$options: 'i',
							},
						},
						{
							brand: {
								$regex: text,
								$options: 'i',
							},
						},
						{
							description: {
								$regex: text,
								$options: 'i',
							},
						},
					],
				}
			},
		])

		products = products.map((product) => {
			delete product['id_str']

			return product
		})

		if (isPalindrome(text)) {
			products = applyDiscount(products, 50)
		}

		let product = products.find((product) => {
			return product.id.toString() == text
		})

		if (product != null) {
			products = [product]
		}

		return products
	}
}

export default ProductService