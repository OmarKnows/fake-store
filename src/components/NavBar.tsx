import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const NavBar = () => {
	return (
		<div className='flex justify-center items-center gap-6 border border-stroke font-semibold p-5 bg-white'>
			<img src={logo} />
			<Link to={'/products'}>Products</Link>
			<Link to={'/login'}>Login</Link>

			<div>Cart</div>
			<div>Profile</div>
		</div>
	);
};

export default NavBar;
