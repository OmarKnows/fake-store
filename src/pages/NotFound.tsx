import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className='flex h-screen justify-center items-center bg-gray-100'>
			<div className='text-center'>
				<h1 className='text-6xl font-bold text-gray-800'>404</h1>
				<p className='text-2xl text-gray-600'>Oops! Page not found</p>
				<p className='text-lg text-gray-500 mt-4'>
					The page you are looking for might have been removed or doesn't exist.
				</p>
				<Button
					variant={'default'}
					className=' text-white font-bold py-2 px-4 rounded mt-8'
					onClick={() => {
						navigate('/');
					}}
				>
					Back To Home
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
