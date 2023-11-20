import { AxiosResponse } from 'axios';
import { api } from '@/utils/api';
import { IAuth } from './authModel';

const login = async (credentials: IAuth): Promise<AxiosResponse> => {
	return await api.post('/auth/signin', {
		...credentials,
	});
};

const authServices = {
	login,
};
export default authServices;
