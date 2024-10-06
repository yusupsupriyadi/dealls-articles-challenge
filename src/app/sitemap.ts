import { Article } from '@/components/interface/Article';
import { CategoryArticles } from '@/components/interface/CategoryArticles';
import { fetchData } from '@/services/fetch';
import { MetadataRoute } from 'next';

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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const response = await fetchData<{ posts: Article[] }>(`/posts`, {
		sortBy: 'views',
		order: 'desc',
		limit: '5',
	});
	const posts: Article[] = response.posts;

	const categories = await getCategories();
	const articlesByCategory = await getArticlesByCategory(categories);

	const postEntries = posts.map((post) => ({
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/article/${post.id}`,
		lastModified: new Date().toISOString(),
	}));

	const articlesEntries = articlesByCategory.flatMap((category) =>
		category.articles.map((article: Article) => ({
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/article/${article.id}`,
			lastModified: new Date().toISOString(),
		})),
	);

	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date().toISOString(),
		},
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
			lastModified: new Date().toISOString(),
		},
		...postEntries,
		...articlesEntries,
	];
}
