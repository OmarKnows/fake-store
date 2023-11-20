import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/products.slice';
import authSlice from './auth/auth.slice';
import cartSlice from './cart/cart.slice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		auth: authSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
