import { IProduct } from '../src/models/Product'
import { applyDiscount } from '../src/utils'

describe('Discount test', () => {
	test('Apply discount correctly', () => {
		const products: IProduct[] = [
			{
				id: 1,
				brand: '',
				description: '',
				image: '',
				price: 100,
			},
		]

		expect(applyDiscount(products, 50)[0].price).toBe(50)
	})

	test('Do not apply discount to non numeric prices', () => {
		const products: IProduct[] = [
			{
				id: 1,
				brand: '',
				description: '',
				image: '',
				// @ts-ignore
				price: '',
			},
		]

		expect(applyDiscount(products, 50)).toStrictEqual(products)
	})

	test('Apply discount correctly to floating points', () => {
		const products: IProduct[] = [
			{
				id: 1,
				brand: '',
				description: '',
				image: '',
				price: 99.6,
			},
		]

		expect(applyDiscount(products, 2.5)[0].price).toBeCloseTo(2.49)
	})

	test('Allow empty array', () => {
		const products: IProduct[] = []

		expect(applyDiscount(products, 50).length).toBeCloseTo(0)
	})

	test('Allow no discount (0)', () => {
		const products: IProduct[] = [
			{
				id: 1,
				brand: '',
				description: '',
				image: '',
				price: 100,
			},
		]

		expect(applyDiscount(products, 0.0)[0].price).toBe(100)
	})
})