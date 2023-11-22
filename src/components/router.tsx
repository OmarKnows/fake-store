import NavBar from '@/components/NavBar';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Footer from './Footer';
import LoginPage from '@/pages/Login/LoginPage';
import ProductPage from '@/pages/Product/ProductPage';
import CategoriesPage from '@/pages/Categories/CategoriesPage';
import ProductsPage from '@/pages/Products/ProductsPage';
import CartPage from '@/pages/Cart/CartPage';
import RegisterPage from '@/pages/Register/RegisterPage';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={
				<div className='flex flex-col min-h-screen'>
					<NavBar />
					<div className='flex-1 mb-5'>
						<Outlet />
					</div>
					<Footer />
				</div>
			}
		>
			<Route index path='/' element={<LoginPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/categories' element={<CategoriesPage />} />
			<Route path='/categories/:id' element={<ProductsPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
			<Route path='/cart' element={<CartPage />} />

			<Route path='*' element={<NotFound />} />
		</Route>
	)
);
