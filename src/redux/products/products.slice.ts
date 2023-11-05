import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct } from './productsModel';
import productServices from './products.service';
import { AxiosError } from 'axios';

interface IProductsState {
	products: IProduct[];
	loading: boolean;
	error: string | null;
}

const initialState: IProductsState = {
	products: [],
	loading: false,
	error: null,
};

export const getProducts = createAsyncThunk('getProducts', async () => {
	try {
		return (await productServices.getProducts()).data;
	} catch (error) {
		const err = error as AxiosError;
		throw err;
	}
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to fetch products';
			});
	},
});

export default productsSlice.reducer;
