import SliderList from '@/components/SliderList';
import ArticlesSlider from '../../components/ArticlesSlider';
import ListArticles from '../../components/ListArticles';

export default async function Home({
	searchParams,
}: {
	searchParams: { category: string };
}) {
	const category = searchParams.category;

	const dataCategories = async () => {
		const res = await fetch('https://dummyjson.com/posts/tag-list');
		const data = await res.json();
		return data;
	};

	const categories = await dataCategories();

	return (
		<>
			<ArticlesSlider />
			<SliderList
				data={categories}
				active={category}
				className='mt-4'
			/>
			<ListArticles params={{ category }} />
		</>
	);
}
