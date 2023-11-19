import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICategory, IProduct } from './productsModel';
import productServices from './products.service';
import { AxiosError } from 'axios';

interface IProductsState {
	products: IProduct[];
	product: IProduct | null;
	categories: ICategory[];
	loading: boolean;
	error: string | null;
}

const initialState: IProductsState = {
	products: [],
	categories: [],
	product: null,
	loading: false,
	error: null,
};

export const getProducts = createAsyncThunk('getProducts', async (_, { rejectWithValue }) => {
	try {
		const { data } = await productServices.getProducts();
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const getProduct = createAsyncThunk('getProduct', async (id: string, { rejectWithValue }) => {
	try {
		const { data } = await productServices.getProduct(id);
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const getCategories = createAsyncThunk('getCategories', async (_, { rejectWithValue }) => {
	try {
		const { data } = await productServices.getCategories();
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const getProductsInCategory = createAsyncThunk(
	'getProductsInCategory',
	async (category: string, { rejectWithValue }) => {
		try {
			const { data } = await productServices.getProductsInCategory(category);
			return data.data;
		} catch (error) {
			const err = error as AxiosError;
			return rejectWithValue(err.response?.data);
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.products = action.payload;
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(getProduct.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProduct.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.product = action.payload;
			})
			.addCase(getProduct.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(getCategories.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.categories = action.payload;
			})
			.addCase(getCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(getProductsInCategory.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductsInCategory.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.products = action.payload;
			})
			.addCase(getProductsInCategory.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});

export default productsSlice.reducer;
