import NavBar from '@/components/NavBar';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Footer from './Footer';
import LoginPage from '@/pages/Login/LoginPage';
import ProductPage from '@/pages/Product/ProductPage';
import CategoriesPage from '@/pages/Products/CategoriesPage';

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
			<Route path='/categories' element={<CategoriesPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
		</Route>
	)
);
