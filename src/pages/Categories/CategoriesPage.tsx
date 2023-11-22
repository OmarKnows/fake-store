import Carousel from '@/components/Carousel/Carousel';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getCategories } from '@/redux/products/products.slice';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import carousel1 from '@/assets/carousel1.avif';
import carousel2 from '@/assets/carousel2.avif';
import carousel3 from '@/assets/carousel3.avif';
import 'react-loading-skeleton/dist/skeleton.css';
import ProductsSkeleton from './CategoriesSkeleton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryCard from '@/components/CategoryCard';

const CategoriesPage = () => {
	const dispatch = useAppDispatch();
	const { categories, loading, error } = useAppSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(getCategories());
		if (error) toast.error(error);
	}, [dispatch, error]);

	return (
		<div>
			<ToastContainer />
			<Carousel
				items={[
					<img className='h-full w-full object-cover' src={carousel1} key={1} />,
					<img className='h-full w-full object-cover' src={carousel2} key={2} />,
					<img className='h-full w-full object-cover' src={carousel3} key={3} />,
				]}
			/>
			{loading && <ProductsSkeleton />}
			{!loading && !error ? (
				<div className='flex justify-center gap-5 flex-wrap mt-20'>
					{categories.map((category) => (
						<CategoryCard key={category._id} category={category} loading={loading} />
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default CategoriesPage;
