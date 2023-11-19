import NavBar from '@/components/NavBar';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Footer from './Footer';
import LoginPage from '@/pages/Login/LoginPage';
import ProductsPage from '@/pages/Products/ProductsPage';
import ProductPage from '@/pages/Product/ProductPage';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={
				<>
					<NavBar />
					<Outlet />
					<Footer />
				</>
			}
		>
			<Route index path='/' element={<LoginPage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
		</Route>
	)
);
