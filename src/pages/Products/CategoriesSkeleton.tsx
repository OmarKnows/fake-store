import CategoryCard from '@/components/ui/CategoryCard';

const CategoriesSkeleton = () => {
	return (
		<div className='flex justify-center gap-5 flex-wrap mt-20'>
			{Array.from({ length: 5 }).map((_, index) => (
				<CategoryCard key={index} loading={true} />
			))}
		</div>
	);
};

export default CategoriesSkeleton;
