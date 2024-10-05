import { Eye, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Article {
	id: number;
	title: string;
	body: string;
	reactions: {
		likes: number;
		dislikes: number;
	};
	views: number;
}

export default async function ListArticles({
	params,
}: {
	params: { category: string };
}) {
	const { category } = params;

	const dataArticles = async () => {
		if (category) {
			const res = await fetch(
				`https://dummyjson.com/posts/tag/${category}?limit=5`,
			);
			const data = await res.json();
			return data.posts;
		} else {
			const res = await fetch('https://dummyjson.com/posts?limit=5');
			const data = await res.json();
			return data.posts;
		}
	};

	const data = await dataArticles();

	return (
		<div className='mt-4'>
			{data.map((article: Article) => (
				<Link
					href={`/article/${article.id}`}
					key={article.id}>
					<div className='border-b border-gray-300 py-6 md:py-10'>
						<h1 className='text-xl md:text-3xl font-bold'>
							{article.title}
						</h1>
						<p className='line-clamp-2 mt-2 text-base'>
							{article.body}
						</p>
						<section className='flex items-center gap-2 mt-4'>
							<div className='flex items-center gap-1'>
								<Eye className='w-3 h-3 md:w-4 md:h-4' />
								<p className='text-xs md:text-sm'>
									{article.views}
								</p>
							</div>
							<div className='flex items-center gap-1'>
								<ThumbsUp className='w-3 h-3 md:w-4 md:h-4' />
								<p className='text-xs md:text-sm'>
									{article.reactions.likes}
								</p>
							</div>
						</section>
					</div>
				</Link>
			))}
		</div>
	);
}
