import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/products.slice';

const store = configureStore({
	reducer: {
		products: productsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
