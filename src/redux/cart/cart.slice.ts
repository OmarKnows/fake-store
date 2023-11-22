import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ICartItem } from './cartModel';
import cartServices from './cart.service';

interface ICartState {
	cartOwner: string;
	product: ICartItem | undefined;
	products: ICartItem[];
	totalCartPrice: number;
	loading: boolean;
	error: string | null;
}

const initialState: ICartState = {
	cartOwner: '',
	product: undefined,
	products: [],
	totalCartPrice: 0,
	loading: false,
	error: null,
};

export const getCart = createAsyncThunk('getCart', async (_, { rejectWithValue }) => {
	try {
		const { data } = await cartServices.getCart();
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const addToCart = createAsyncThunk('addToCart', async (productId: string, { rejectWithValue }) => {
	try {
		const { data } = await cartServices.addToCart(productId);
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const updateCartProductQuantity = createAsyncThunk(
	'updateCartProductQuantity',
	async (
		productData: {
			productId: string;
			count: number;
		},
		{ rejectWithValue }
	) => {
		try {
			const { productId, count } = productData;
			const { data } = await cartServices.updateCartProductQuantity(productId, count);
			return data.data;
		} catch (error) {
			const err = error as AxiosError;
			return rejectWithValue(err.response?.data);
		}
	}
);

export const removeFromCart = createAsyncThunk('removeFromCart', async (productId: string, { rejectWithValue }) => {
	try {
		const { data } = await cartServices.removeFromCart(productId);
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const clearCart = createAsyncThunk('clearCart', async (_, { rejectWithValue }) => {
	try {
		const { data } = await cartServices.clearCart();
		return data.data;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

export const combineCarts = createAsyncThunk('combineCarts', async (_, { rejectWithValue }) => {
	try {
		cartServices.combineCarts();
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue(err.response?.data);
	}
});

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToAnonymousCart: (state, action) => {
			state.products = cartServices.addToAnonymousCart(action.payload);
			state.totalCartPrice += action.payload.price;
		},
		getAnonymousCart: (state) => {
			state.products = cartServices.getAnonymousCart();
		},
		removeFromAnonymousCart: (state, action) => {
			state.products = cartServices.removeFromAnonymousCart(action.payload._id);
			state.totalCartPrice -= action.payload.price;
		},
		clearAnonymousCart: (state) => {
			localStorage.removeItem('cart');
			state.products = [];
			state.totalCartPrice = 0;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.products = action.payload.products;
				state.cartOwner = action.payload.cartOwner;
				state.totalCartPrice = action.payload.totalCartPrice;
				state.loading = false;
				state.error = null;
			})
			.addCase(getCart.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(addToCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload.products;
				state.cartOwner = action.payload.cartOwner;
				state.totalCartPrice = action.payload.totalCartPrice;
				state.error = null;
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(removeFromCart.pending, (state) => {
				state.loading = true;

				state.error = null;
			})
			.addCase(removeFromCart.fulfilled, (state, action) => {
				state.loading = false;
				state.products = action.payload.products;
				state.cartOwner = action.payload.cartOwner;
				state.totalCartPrice = action.payload.totalCartPrice;
				state.error = null;
			})
			.addCase(removeFromCart.rejected, (state, action) => {
				state.loading = false;

				state.error = action.payload as string | null;
			})
			.addCase(clearCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(clearCart.fulfilled, (state) => {
				state.loading = false;
				state.products = [];
				state.error = null;
			})
			.addCase(clearCart.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			})
			.addCase(updateCartProductQuantity.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateCartProductQuantity.fulfilled, (state) => {
				state.loading = false;
				state.error = null;
			})
			.addCase(updateCartProductQuantity.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});

export const { addToAnonymousCart, getAnonymousCart, removeFromAnonymousCart, clearAnonymousCart } = cartSlice.actions;
export default cartSlice.reducer;
