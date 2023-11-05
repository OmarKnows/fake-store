import { useEffect } from 'react';
import { RootState } from './redux/store';
import { getProducts } from './redux/products/products.slice';
import { useAppDispatch, useAppSelector } from './redux/hooks';

const App = () => {
	const dispatch = useAppDispatch();
	const { products, loading, error } = useAppSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{products?.map((product) => (
				<div key={product.id}>
					<h2>{product?.title}</h2>
					<p>Price: ${product?.price}</p>
					<p>Description: {product?.description}</p>
				</div>
			))}
		</div>
	);
};

export default App;
