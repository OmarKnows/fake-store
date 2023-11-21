import { AxiosResponse } from 'axios';
import { apiPrivate } from '@/utils/api';
import { ICartItem } from './cartModel';
import { IProduct } from '../products/productsModel';

const getCart = async (): Promise<AxiosResponse> => {
	return await apiPrivate.get('/cart');
};

const getAnonymousCart = () => {
	return JSON.parse(localStorage.getItem('cart') || '[]');
};

const addToCart = async (productId: string): Promise<AxiosResponse> => {
	return await apiPrivate.post('/cart', {
		productId,
	});
};

const combineCarts = () => {
	let cartArray: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

	cartArray.forEach((product) => {
		addToCart(product._id);
		updateCartProductQuantity(product._id, product.count);
	});

	localStorage.removeItem('cart');
};

const addToAnonymousCart = (product: IProduct) => {
	let cartArray: ICartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

	const existingProductIndex = cartArray.findIndex((item) => item._id === product._id);

	if (existingProductIndex !== -1) {
		cartArray[existingProductIndex].count++;
	} else {
		const newItem: ICartItem = {
			_id: product._id,
			count: 1,
			price: product.price,
			product,
		};
		cartArray.push(newItem);
	}

	localStorage.setItem('cart', JSON.stringify(cartArray));
};

const updateCartProductQuantity = async (productId: string, count: number): Promise<AxiosResponse> => {
	return await apiPrivate.put(`/cart/${productId}`, {
		count,
	});
};

const removeFromCart = async (productId: string): Promise<AxiosResponse> => {
	return await apiPrivate.delete(`/cart/${productId}`);
};

const clearCart = async (): Promise<AxiosResponse> => {
	return await apiPrivate.delete('/cart/');
};

const cartServices = {
	getCart,
	addToCart,
	removeFromCart,
	clearCart,
	updateCartProductQuantity,
	addToAnonymousCart,
	getAnonymousCart,
	combineCarts,
};
export default cartServices;
