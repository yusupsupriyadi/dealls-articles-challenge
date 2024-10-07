import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import type { Article } from '@/components/interface/Article';
import { ArticleStats } from '../../../../components/ui/ArticleStats';
import { fetchData } from '@/services/fetch';

async function getArticleData(slug: string): Promise<Article> {
	const res = await fetchData<Article>(`/posts/${slug}`);
	return res;
}

async function getRecommendedArticles(): Promise<Article[]> {
	const response = await fetchData<{ posts: Article[] }>(`/posts`, {
		sortBy: 'views',
		order: 'desc',
		limit: '4',
	});
	return response.posts;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const [data] = await Promise.all([
		getArticleData(params.slug),
		getRecommendedArticles(),
	]);
	return {
		title: data.title,
		description: data.body.substring(0, 160),
		twitter: {
			card: 'summary_large_image',
		},
	};
}

export default async function Article({
	params,
}: {
	params: { slug: string };
}) {
	const [data, recommendedArticles] = await Promise.all([
		getArticleData(params.slug),
		getRecommendedArticles(),
	]);

	return (
		<article className='mx-auto py-8'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
				{data.title}
			</h1>
			<ArticleStats
				id={data.id.toString()}
				title={data.title}
				views={data.views}
				likes={data.reactions.likes}
			/>

			<div className='text-base md:text-lg leading-relaxed'>
				{/* Use dangerouslySetInnerHTML if the content contains HTML */}
				<p dangerouslySetInnerHTML={{ __html: data.body }} />
			</div>

			<div className='flex items-center gap-2 mt-8'>
				{data.tags.map((tag) => (
					<Link
						href={`/?category=${tag}`}
						key={tag}
						aria-label={`Read: ${tag}`}
						className='text-xs md:text-sm bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-3xl text-gray-800 dark:text-gray-300 capitalize'>
						{tag}
					</Link>
				))}
			</div>
			<ArticleStats
				id={data.id.toString()}
				className='mt-8 border-none'
				title={data.title}
				views={data.views}
				likes={data.reactions.likes}
			/>

			<h2 className='text-2xl font-bold mt-8'>Recommendations from Dealls</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
				{recommendedArticles.map((article: Article) => (
					<Link
						href={`/article/${article.id}`}
						key={article.id}
						aria-label={`Read: ${article.title}`}
						className='block'>
						<article>
							<h3 className='font-semibold text-lg mb-2'>
								{article.title}
							</h3>
							<p className='text-sm text-gray-600 dark:text-gray-400'>
								{article.body.substring(0, 100)}...
							</p>

							<ArticleStats
								className='!mt-1 !mb-0 !px-0 border-none'
								id={article.id.toString()}
								title={article.title}
								views={article.views}
								likes={article.reactions.likes}
							/>
						</article>
					</Link>
				))}
			</div>
		</article>
	);
}
