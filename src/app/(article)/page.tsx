import SliderList from '@/components/ui/SliderList';
import ArticlesSlider from '@/components/ui/ArticlesSlider';
import ListArticles from '@/components/ui/ListArticles';
import { Article } from '@/components/interface/Article';
import { fetchData } from '@/services/fetch';

async function getCategories(): Promise<string[]> {
	return fetchData<string[]>(`/posts/tag-list`);
}

async function getHighlightedArticles(): Promise<Article[]> {
	const response = await fetchData<{ posts: Article[] }>(`/posts`, {
		sortBy: 'views',
		order: 'desc',
		limit: '5',
	});
	return response.posts;
}

export default async function Home({
	searchParams,
}: {
	searchParams: { category?: string };
}) {
	const category = searchParams.category;

	const [categories, highlightedArticles] = await Promise.all([
		getCategories(),
		getHighlightedArticles(),
	]);

	return (
		<>
			<ArticlesSlider data={highlightedArticles as Article[]} />
			<SliderList
				data={categories}
				active={category}
				className='mt-4'
			/>
			<ListArticles params={{ category: category || '' }} />
		</>
	);
}
