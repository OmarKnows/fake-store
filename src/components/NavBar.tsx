import { NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import cart from '../assets/cart.png';
import LngDropdown from './LngDropdown';

const NavBar = () => {
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
				<NavLink className={({ isActive }) => (isActive ? 'text-active font-black' : 'font-black')} to='/'>
					Login
				</NavLink>
				<Button className='w-36 h-10 me-28' variant='secondary'>
					Sign Up
				</Button>
				<div className='flex items-center gap-6'>
					<img src={cart} />
					<LngDropdown />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
