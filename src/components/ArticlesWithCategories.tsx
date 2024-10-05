import { Eye, Newspaper, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Article {
	id: number;
	title: string;
	body: string;
	views: number;
	reactions: {
		likes: number;
	};
}

interface CategoryArticles {
	category: string;
	articles: Article[];
}

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => (
	<Link
		href={`/article/${article.id}`}
		key={article.id}>
		<div className='py-2'>
			<div className='flex items-center gap-2'>
				<Newspaper className='w-3 h-3 md:w-4 md:h-4' />
				<h2 className='line-clamp-1 text-base md:text-lg font-bold'>
					{article.title}
				</h2>
			</div>
			<p className='line-clamp-2 mt-1  text-xs md:text-sm'>
				{article.body}
			</p>
			<section className='flex items-center gap-2 md:gap-4 mt-1 md:mt-2'>
				<div className='flex items-center gap-1'>
					<Eye className='w-2 h-2 md:w-3 md:h-3' />
					<p className='text-xs'>{article.views}</p>
				</div>
				<div className='flex items-center gap-1'>
					<ThumbsUp className='w-2 h-2 md:w-3 md:h-3' />
					<p className='text-xs'>{article.reactions.likes}</p>
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
		<h1 className='text-xl md:text-2xl font-bold capitalize border-b border-gray-300 pb-2'>
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
		<div className='h-screen pl-3 md:pl-5 pt-6 md:pt-10 sticky top-0 lg:overflow-y-auto'>
			{data.map((item) => (
				<CategorySection
					key={item.category}
					{...item}
				/>
			))}
		</div>
	);
}
