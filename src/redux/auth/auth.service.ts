import { AxiosResponse } from 'axios';
import { api } from '@/utils/api';
import { IAuth, IRegister } from './authModel';

const login = async (credentials: IAuth): Promise<AxiosResponse> => {
	return await api.post('/auth/signin', {
		...credentials,
	});
};

const signup = async (credentials: IRegister): Promise<AxiosResponse> => {
	return await api.post('/auth/signup', {
		...credentials,
	});
};

const authServices = {
	login,
	signup,
};
export default authServices;
