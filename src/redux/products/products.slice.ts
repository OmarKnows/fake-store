import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProduct, Product } from './productsModel';
import productServices from './products.service';
import { AxiosError } from 'axios';

interface IProductsState {
	products: IProduct[];
	product: IProduct | null;
	loading: boolean;
	error: string | null;
}

const initialState: IProductsState = {
	products: [],
	product: null,
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

export const getProduct = createAsyncThunk('getProduct', async (id: number) => {
	try {
		return (await productServices.getProduct(id)).data;
	} catch (error) {
		const err = error as AxiosError;
		throw err;
	}
});

export const addProduct = createAsyncThunk('addProduct', async (product: Product) => {
	try {
		return (await productServices.addProduct(product)).data;
	} catch (error) {
		const err = error as AxiosError;
		throw err;
	}
});

export const updateProduct = createAsyncThunk('updateProduct', async (product: IProduct) => {
	try {
		return (await productServices.updateProduct(product)).data;
	} catch (error) {
		const err = error as AxiosError;
		throw err;
	}
});

export const deleteProduct = createAsyncThunk('deleteProduct', async (id: number) => {
	try {
		return (await productServices.deleteProduct(id)).data;
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
			})
			.addCase(getProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to fetch product';
			})
			.addCase(addProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(addProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(addProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to add product';
			})
			.addCase(updateProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(updateProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(updateProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to update product';
			})
			.addCase(deleteProduct.pending, (state) => {
				state.loading = true;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(deleteProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Failed to delete product';
			});
	},
});

export default productsSlice.reducer;
