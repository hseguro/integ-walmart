import { Request, Response } from 'express'
import ProductService from '../services/Product.service'

class SearchController {
	static async search(req: Request, res: Response) {
		if (!('search' in req.query)) {
			return res.status(400).json({
				error: '`search` query param not found',
			})
		}

		const text = req.query.search.toString()

		let products = await ProductService.searchProducts(text)

		res.json({
			products,
		})
	}
}

export default SearchController