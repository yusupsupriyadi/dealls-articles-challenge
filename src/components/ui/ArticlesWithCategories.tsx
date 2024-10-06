import { Eye, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Article } from '../interface/Article';
import { CategoryArticles } from '../interface/CategoryArticles';
import FormatNumber from '@/utils/FormatNumber';

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => (
	<Link
		aria-label={`Read: ${article.title}`}
		href={`/article/${article.id}`}
		key={article.id}>
		<div className='py-3'>
			<h2 className='line-clamp-2 text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200'>
				{article.title}
			</h2>

			<section className='flex items-center gap-2 md:gap-4 mt-1 md:mt-2'>
				<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
					<Eye className='w-2 h-2 md:w-3 md:h-3' />
					<p className='text-xs'>
						{FormatNumber(article.views, 'thousands')}
					</p>
				</div>
				<div className='flex items-center gap-1 text-gray-600 dark:text-gray-400'>
					<ThumbsUp className='w-2 h-2 md:w-3 md:h-3' />
					<p className='text-xs'>
						{FormatNumber(article.reactions.likes, 'thousands')}
					</p>
				</div>
			</section>
		</div>
	</Link>
);

const CategorySection: React.FC<CategoryArticles> = ({
	category,
	articles,
}) => (
	<div
		key={category}
		className='pb-6 md:pb-10'>
		<h1 className='text-xl md:text-2xl font-bold capitalize border-b border-gray-300 dark:border-gray-700 pb-2'>
			{category}
		</h1>
		{articles.map((article) => (
			<ArticleItem
				key={article.id}
				article={article}
			/>
		))}
	</div>
);

export default function ArticlesWithCategories({
	data,
}: {
	data: CategoryArticles[];
}) {
	return (
		<div>
			<div className='sticky top-0 h-screen rounded-none p-0 md:p-4 !overflow-y-none lg:!overflow-y-auto'>
				<div className=' pl-0 md:pl-10 pt-6 md:pt-10 '>
					<div className='flex items-center text-xs gap-2 mb-4'>
						<Link href='/about' aria-label='About'>
							About
						</Link>
						/
						<Link href='/privacy-policy' aria-label='Privacy'>
							Privacy
						</Link>
						/
						<Link href='/terms-of-service' aria-label='Terms'>
							Terms
						</Link>
					</div>
					{data.map((item) => (
						<CategorySection
							key={item.category}
							{...item}
						/>
					))}
					<div className='flex items-center text-xs gap-2 mb-4'>
						Copyright © 2024 Dealls. All rights reserved.
					</div>
				</div>
			</div>
		</div>
	);
}
