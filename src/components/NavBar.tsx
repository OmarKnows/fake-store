import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import cart from '../assets/cart.png';
import profile from '../assets/profile.png';
import LngDropdown from './LngDropdown';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { logout } from '@/redux/auth/auth.slice';

const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [count, setCount] = useState<number>(0);
	const { token } = useAppSelector((state) => state.auth);
	const { products, product } = useAppSelector((state) => state.cart);

	const handleLogout = () => {
		dispatch(logout());
		navigate('/');
		setCount(0);
	};

	useEffect(() => {
		const cartCount = () => {
			let counter = 0;
			products.forEach((product) => {
				counter += product.count;
			});
			setCount(counter);
		};
		cartCount();
	}, [navigate, token, products, product]);

	return (
		<div className='flex justify-between items-center bg-dark h-[85px] px-6 text-white'>
			<NavLink to={'/categories'} className=' text-2xl font-normal'>
				Fake Store
			</NavLink>
			<div className='flex items-center gap-10'>
				<NavLink className={({ isActive }) => (isActive ? 'text-active font-black' : 'font-black')} to='/categories'>
					Shop
				</NavLink>
				<NavLink className={({ isActive }) => (isActive ? 'text-active font-black' : 'font-black')} to='/contact-us'>
					Contact us
				</NavLink>
				{!token ? (
					<NavLink className={({ isActive }) => (isActive ? 'text-active font-black' : 'font-black')} to='/'>
						Login
					</NavLink>
				) : (
					<></>
				)}

				<div className='flex items-center gap-6'>
					{token ? <img src={profile} /> : <></>}
					<NavLink className='relative' to='cart'>
						<img src={cart} />
						{count ? (
							<div className='absolute right-[-10px] top-[-10px] bg-red-400 rounded-full w-4 h-4 text-xs flex justify-center items-center p-1	'>
								{count}
							</div>
						) : (
							<></>
						)}
					</NavLink>
					<LngDropdown />
					{token ? (
						<Button className='w-36 h-10' variant='secondary' onClick={handleLogout}>
							Log Out
						</Button>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
