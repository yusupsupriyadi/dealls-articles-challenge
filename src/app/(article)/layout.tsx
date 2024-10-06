import ArticlesWithCategories from '@/components/ui/ArticlesWithCategories';
import { CategoryArticles } from '@/components/interface/CategoryArticles';
import { Article } from '@/components/interface/Article';
import { fetchData } from '@/services/fetch';

async function getCategories(): Promise<string[]> {
	return fetchData<string[]>(`/posts/tag-list`);
}

async function getArticlesByCategory(
	categories: string[],
): Promise<CategoryArticles[]> {
	const firstFiveCategories = categories.slice(0, 5);
	return Promise.all(
		firstFiveCategories.map(async (category) => ({
			category,
			articles: await fetchData<{ posts: Article[] }>(
				`/posts/tag/${category}`,
				{ limit: '5', sortBy: 'views', order: 'desc' },
			).then((data) => data.posts),
		})),
	);
}

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categories = await getCategories();
	const articlesByCategory = await getArticlesByCategory(categories);

	return (
		<main className='container-xl mx-auto px-6 lg:px-0'>
			<div className='md:grid md:grid-cols-3 gap-4 md:divide-x md:divide-gray-500'>
				<section className='md:col-span-2 md:pr-12 pt-10'>
					{children}
				</section>
				<ArticlesWithCategories
					data={articlesByCategory as CategoryArticles[]}
				/>
			</div>
		</main>
	);
}
