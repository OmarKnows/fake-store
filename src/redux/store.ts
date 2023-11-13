import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/products.slice';
import authSlice from './auth/auth.slice';

const store = configureStore({
	reducer: {
		products: productsSlice,
		auth: authSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
