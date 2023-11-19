import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import authServices from './auth.service';
import { IAuth } from './authModel';
import { IApiResponse } from '@/utils/api';

interface IAuthState {
	token: string | null;
	loading: boolean;
	error: string | null;
}

const initialState: IAuthState = {
	token: localStorage.getItem('token') || null,
	loading: false,
	error: null,
};

export const login = createAsyncThunk('login', async (credentials: IAuth, { rejectWithValue }) => {
	try {
		const response = await authServices.login(credentials);
		localStorage.setItem('token', response.data.token);
		return response.data.token;
	} catch (error) {
		const err = error as AxiosError;
		return rejectWithValue((err.response?.data as IApiResponse).message);
	}
});

const authSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		logout: (state) => {
			state.token = null;
			localStorage.removeItem('token');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.token = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string | null;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
