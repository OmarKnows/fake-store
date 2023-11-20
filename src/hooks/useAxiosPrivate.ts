import { useAppSelector } from '@/redux/hooks';
import { apiPrivate } from '@/utils/api';
import { useEffect } from 'react';

const useAxiosPrivate = () => {
	const { token } = useAppSelector((state) => state.auth);

	useEffect(() => {
		const requestIntercept = apiPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${token}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		return () => {
			apiPrivate.interceptors.request.eject(requestIntercept);
		};
	}, [token]);

	return apiPrivate;
};

export default useAxiosPrivate;
