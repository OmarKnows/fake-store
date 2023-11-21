import NavBar from '@/components/NavBar';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Footer from './Footer';
import LoginPage from '@/pages/Login/LoginPage';
import ProductPage from '@/pages/Product/ProductPage';
import CategoriesPage from '@/pages/Categories/CategoriesPage';
import ProductsPage from '@/pages/Products/ProductsPage';
import CartPage from '@/pages/Cart/CartPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={
				<div className='relative min-h-screen'>
					<NavBar />
					<Outlet />
					<Footer />
				</div>
			}
		>
			<Route index path='/' element={<LoginPage />} />
			<Route path='/categories' element={<CategoriesPage />} />
			<Route path='/categories/:id' element={<ProductsPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
			<Route path='/cart' element={<CartPage />} />
		</Route>
	)
);
