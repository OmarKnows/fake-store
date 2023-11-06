import NavBar from '@/components/NavBar';
import LoginPage from '@/pages/LoginPage';
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
			<Route index path='/products' element={<ProductsPage />} />
			<Route path='/login' element={<LoginPage />} />
		</Route>
	)
);
