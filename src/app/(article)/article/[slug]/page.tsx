import { Eye, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default async function Article({
	params,
}: {
	params: { slug: string };
}) {
	const dataArticles = async () => {
		const res = await fetch(`https://dummyjson.com/posts/${params.slug}`);
		const data = await res.json();
		return data;
	};

	const data = await dataArticles();

	return (
		<div className='mx-auto py-8'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
				{data.title}
			</h1>
			<section className='flex items-center gap-4 border-y border-gray-500 py-4 mb-8'>
				<div className='flex items-center gap-2'>
					<Eye className='w-3 h-3 md:w-4 md:h-4 text-gray-400' />
					<p className='text-xs md:text-sm text-gray-400'>
						{data.views} views
					</p>
				</div>
				<div className='flex items-center gap-2'>
					<ThumbsUp className='w-3 h-3 md:w-4 md:h-4 text-gray-400' />
					<p className='text-xs md:text-sm text-gray-400'>
						{data.reactions.likes} likes
					</p>
				</div>
			</section>
			<p className='text-base md:text-lg leading-relaxed'>{data.body}</p>
			<div className='flex items-center gap-2 mt-8'>
				{data.tags.map((tag: string) => (
					<Link
						href={`/?category=${tag}`}
						key={tag}
						className='text-xs md:text-sm bg-gray-200 px-3 py-1 rounded-2xl text-gray-700 capitalize'>
						{tag}
					</Link>
				))}
			</div>

			<section className='flex items-center gap-4  py-4 mb-8'>
				<div className='flex items-center gap-2'>
					<Eye className='w-3 h-3 md:w-4 md:h-4 text-gray-400' />
					<p className='text-xs md:text-sm text-gray-400'>
						{data.views} views
					</p>
				</div>
				<div className='flex items-center gap-2'>
					<ThumbsUp className='w-3 h-3 md:w-4 md:h-4 text-gray-400' />
					<p className='text-xs md:text-sm text-gray-400'>
						{data.reactions.likes} likes
					</p>
				</div>
			</section>
		</div>
	);
}
