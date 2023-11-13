import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import cart from '../assets/cart.png';
import profile from '../assets/profile.png';
import LngDropdown from './LngDropdown';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { logout } from '@/redux/auth/auth.slice';

const NavBar = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { token } = useAppSelector((state: RootState) => state.auth);

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		if (!token) navigate('/');
	}, [navigate, token]);

	return (
		<div className='flex justify-between items-center bg-dark h-[85px] px-6 text-white'>
			<div className=' text-2xl font-normal'>Fake Store</div>
			<div className='flex items-center gap-10'>
				<NavLink className={({ isActive }) => (isActive ? 'text-active font-black' : 'font-black')} to='/products'>
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
					<img src={cart} />
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
