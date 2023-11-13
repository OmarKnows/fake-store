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

export const getProducts = createAsyncThunk('getProducts', async (_, { rejectWithValue }) => {
	try {
		return (await productServices.getProducts()).data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const getProduct = createAsyncThunk('getProduct', async (id: string, { rejectWithValue }) => {
	try {
		return (await productServices.getProduct(id)).data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const addProduct = createAsyncThunk('addProduct', async (product: Product, { rejectWithValue }) => {
	try {
		return (await productServices.addProduct(product)).data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const updateProduct = createAsyncThunk('updateProduct', async (product: IProduct, { rejectWithValue }) => {
	try {
		return (await productServices.updateProduct(product)).data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const deleteProduct = createAsyncThunk('deleteProduct', async (id: string, { rejectWithValue }) => {
	try {
		return (await productServices.deleteProduct(id)).data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
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
				state.error = action.payload as string | null;
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
				state.error = action.payload as string | null;
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
				state.error = action.payload as string | null;
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
				state.error = action.payload as string | null;
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
				state.error = action.payload as string | null;
			});
	},
});

export default productsSlice.reducer;
