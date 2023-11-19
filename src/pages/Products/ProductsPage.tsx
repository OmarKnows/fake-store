import ProductCard from '@/components/ProductCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProductsInCategory } from '@/redux/products/products.slice';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsSkeleton from './ProductsSkeleton';

const ProductsPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { products, loading, error } = useAppSelector((state) => state.products);

	useEffect(() => {
		id && dispatch(getProductsInCategory(id));
	}, [dispatch]);

	return (
		<div>
			{error && <p>Error: {error}</p>}
			{loading ? <ProductsSkeleton /> : <></>}
			{!loading && !error && !products.length ? (
				<div className='flex justify-center my-44 font-bold text-2xl'>No available products in this category</div>
			) : (
				<></>
			)}
			{!loading && !error && products.length ? (
				<div className='px-24 mt-10'>
					<div className='text-xl font-bold'>{products[0].category.name}</div>
					{
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
							{products.map((product) => (
								<div key={product._id}>
									<ProductCard product={product} />
								</div>
							))}
						</div>
					}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProductsPage;
