import { IProduct } from "./models/Product"

const reverseString = (text: string): string => {
	return text.split('').reverse().join('')
}

const isPalindrome = (text: string): boolean => {
	return reverseString(text) === text
}

/**
 * @param products array of products to apply the discount
 * @param discount number between 0.0 and 100.0
 * @returns all the products with the discount applied
 */
const applyDiscount = (products: IProduct[], discount: number): IProduct[] => {
	return products.map((product) => {
		if (!isNaN(product.price) && discount !== 0) {
			product.price = product.price * (discount / 100)
		}

		return product
	})
}

export {
	reverseString,
	isPalindrome,
	applyDiscount
}