import NavBar from '@/components/NavBar';
import LoginPage from '@/pages/LoginPage';
import ProductPage from '@/pages/ProductPage';
import ProductsPage from '@/pages/ProductsPage';
import { Outlet, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={
				<>
					<NavBar />
					<Outlet />
				</>
			}
		>
			<Route index path='/' element={<LoginPage />} />
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/products/:id' element={<ProductPage />} />
		</Route>
	)
);
