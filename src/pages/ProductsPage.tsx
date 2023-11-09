import ProductCard from '@/components/ProductCard';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getProducts } from '@/redux/products/products.slice';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';

const ProductsPage = () => {
	const dispatch = useAppDispatch();
	const { products, loading, error } = useAppSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(getProducts());
		console.log(products);
	}, [dispatch]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error ? (
				<div>
					<h1 className='font-bold text-3xl p-3'>Products</h1>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3	'>
						{products?.map((product) => (
							<div key={product.id}>
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProductsPage;
