'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSkeleton from './LoadingSkeleton';
import { Article } from '@/components/interface/Article';
import { ArticleStats } from '@/app/(article)/article/[slug]/partials/ArticleStats';

interface ListArticlesProps {
	params: { category: string };
}

const ARTICLES_PER_PAGE = 5;

export default function ListArticles({ params }: ListArticlesProps) {
	const { category } = params;
	const [articles, setArticles] = useState<Article[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const skipRef = useRef(0);
	const isFetchingRef = useRef(false);
	const [isMobile, setIsMobile] = useState(false);

	const fetchArticles = useCallback(async () => {
		if (isFetchingRef.current) return;
		isFetchingRef.current = true;

		try {
			const url = new URL('/posts', process.env.NEXT_PUBLIC_API_URL);
			if (category) {
				url.pathname += `/tag/${category}`;
			}
			url.searchParams.append('limit', ARTICLES_PER_PAGE.toString());
			url.searchParams.append('skip', skipRef.current.toString());

			const res = await fetch(url.toString());
			if (!res.ok) throw new Error('Gagal mengambil artikel');
			const data = await res.json();

			if (data.posts.length === 0) {
				setHasMore(false);
			} else {
				setArticles((prevArticles) => [...prevArticles, ...data.posts]);
				skipRef.current += ARTICLES_PER_PAGE;
			}
		} catch (error) {
			console.error('Error fetching articles:', error);
		} finally {
			isFetchingRef.current = false;
		}
	}, [category]);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768); // Sesuaikan dengan breakpoint yang Anda gunakan
		};

		checkIsMobile();
		window.addEventListener('resize', checkIsMobile);

		// Reset state dan ambil data awal
		setArticles([]);
		skipRef.current = 0;
		setHasMore(true);
		fetchArticles();

		return () => window.removeEventListener('resize', checkIsMobile);
	}, [category, fetchArticles]);

	const loadMore = () => {
		fetchArticles();
	};

	const renderArticles = () => (
		<div className='mt-4'>
			{articles.map((article, index) => (
				<ArticleItem
					key={article.id}
					article={article}
					isFirst={index === 0}
				/>
			))}
		</div>
	);

	return (
		<>
			{isMobile ? (
				<>
					{renderArticles()}
					{hasMore && (
						<button
							onClick={loadMore}
							className='w-full py-2 mt-4 bg-gray-200 text-gray-800 rounded-md cursor-pointer'>
							More
						</button>
					)}
				</>
			) : (
				<InfiniteScroll
					dataLength={articles.length}
					next={fetchArticles}
					hasMore={hasMore}
					loader={<LoadingSkeletons />}>
					{renderArticles()}
				</InfiniteScroll>
			)}
			{isFetchingRef.current && isMobile && <LoadingSkeletons />}
		</>
	);
}

function LoadingSkeletons() {
	return (
		<div className='flex flex-col gap-4'>
			{[...Array(3)].map((_, index) => (
				<LoadingSkeleton key={index} />
			))}
		</div>
	);
}

interface ArticleItemProps {
	article: Article;
	isFirst: boolean;
}

function ArticleItem({ article, isFirst }: ArticleItemProps) {
	return (
		<Link href={`/article/${article.id}`}>
			<div
				className={`${
					isFirst
						? ''
						: 'border-t dark:border-gray-700 border-gray-200'
				} py-6 md:py-8`}>
				<h1 className='text-xl md:text-3xl font-bold text-gray-800 dark:text-gray-100'>
					{article.title}
				</h1>
				<p className='line-clamp-2 mt-2 text-gray-500 dark:text-gray-400 font-medium'>
					{article.body}
				</p>
				<ArticleStats
					className='!mb-0 mt-4 !px-0 !py-0 border-none'
					id={article.id.toString()}
					title={article.title}
					views={article.views}
					likes={article.reactions.likes}
				/>
			</div>
		</Link>
	);
}
