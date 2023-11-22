import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import login_Splash from '@/assets/login_splash.png';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IRegister } from '@/redux/auth/authModel';
import { signup } from '@/redux/auth/auth.slice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { token, error, loading } = useAppSelector((state) => state.auth);
	const { register, handleSubmit } = useForm<IRegister>();

	const onRegister: SubmitHandler<IRegister> = async (data) => {
		dispatch(signup(data));
	};

	useEffect(() => {
		if (error) toast.error(error);
		if (token) {
			toast.success('Successfully Signed up', {
				onClose: () => {
					navigate('/categories');
				},
			});
		}
	}, [token, error, navigate]);

	return (
		<div>
			<ToastContainer autoClose={1000} />
			<div className='flex'>
				<div className='w-1/2 flex justify-center text-center '>
					<div>
						<div className='font-medium text-4xl mt-40'>Sign Up</div>
						<form className='mt-20 flex flex-col gap-3' onSubmit={handleSubmit(onRegister)}>
							<Input type='text' placeholder='Name' {...register('name')} />
							<Input type='text' placeholder='Email' {...register('email')} />
							<Input type='password' placeholder='Password' {...register('password')} />
							<Input type='password' placeholder='Password' {...register('rePassword')} />
							<Input type='text' placeholder='Phone' {...register('phone')} />
							<div className='mt-8 mb-4'>
								<Button className='h-14 w-56' type='submit'>
									{loading ? <BeatLoader color='white' /> : 'Sign Up'}
								</Button>
							</div>
						</form>
					</div>
				</div>
				<div className='w-1/2'>
					<img className='w-full ' src={login_Splash} />
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
