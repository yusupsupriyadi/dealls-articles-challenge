import ArticlesWithCategories from '@/components/ArticlesWithCategories';
import React from 'react';

export default async function layout({ children }: { children: React.ReactNode }) {
	const dataCategories = async () => {
		const res = await fetch('https://dummyjson.com/posts/tag-list');
		const data = await res.json();
		return data;
	};

	const dataArticlesByCategory = async (categories: string[]) => {
		const firstFiveCategories = categories.slice(0, 5);
		const articlesGrouped = await Promise.all(
			firstFiveCategories.map(async (category) => {
				const res = await fetch(
					`https://dummyjson.com/posts/tag/${category}?limit=5`,
				);
				const data = await res.json();
				return {
					category,
					articles: data.posts,
				};
			}),
		);
		return articlesGrouped;
	};

	const categories = await dataCategories();
	const articlesByCategory = await dataArticlesByCategory(categories);

	return (
		<div className='md:grid md:grid-cols-3 gap-4 md:divide-x'>
			<section className='md:col-span-2 md:pr-12 pt-10'>
				{children}
			</section>

			<ArticlesWithCategories data={articlesByCategory} />
		</div>
	);
}
