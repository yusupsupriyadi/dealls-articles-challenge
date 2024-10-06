'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FC, memo, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface CategoryListProps {
	data: string[];
	active?: string;
	className?: string;
}

const SliderList: FC<CategoryListProps> = memo(({
	data,
	active,
	className = '',
}) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleScroll = useCallback(() => {
		if (containerRef.current) {
			setScrollPosition(containerRef.current.scrollLeft);
		}
	}, []);

	const isAtStart = scrollPosition === 0;
	const isAtEnd = containerRef.current
		? scrollPosition + containerRef.current.clientWidth >=
		  containerRef.current.scrollWidth
		: false;

	const scrollSmoothly = useCallback((distance: number) => {
		if (containerRef.current) {
			containerRef.current.scrollTo({
				left: containerRef.current.scrollLeft + distance,
				behavior: 'smooth',
			});
		}
	}, []);

	const renderScrollButton = useCallback((direction: 'left' | 'right') => {
		const isLeft = direction === 'left';
		const shouldRender = isLeft ? !isAtStart : !isAtEnd;
		if (!shouldRender) return null;

		const Icon = isLeft ? ChevronLeft : ChevronRight;
		return (
			<>
				<div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} h-full w-32 from-30% bg-gradient-to-${isLeft ? 'r' : 'l'} from-white to-transparent dark:from-background dark:to-transparent`} />
				<button
					onClick={() => scrollSmoothly(isLeft ? -100 : 100)}
					aria-label={isLeft ? 'Previous' : 'Next'}
					className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-0' : 'right-0'} p-4 cursor-pointer`}>
					<Icon className='h-6 w-6 stroke-1 text-gray-500 dark:text-gray-400' />
				</button>
			</>
		);
	}, [isAtStart, isAtEnd, scrollSmoothly]);

	return (
		<div className='relative'>
			<div
				ref={containerRef}
				onScroll={handleScroll}
				className={twMerge(
					'flex items-center gap-8 overflow-x-auto scrollbar-hide border-b border-gray-200 dark:border-gray-800',
					className,
				)}>
				<Link
					aria-label='For you'
					href='/'
					className={twMerge(
						'slick-slide-item',
						active === undefined && 'slide-active',
					)}>
					<p className='line-clamp-1 w-[60px]'>For you</p>
				</Link>
				{data.slice(0, 20).map((category) => (
					<Link
						key={category}
						aria-label={`Category: ${category}`}
						href={`/?category=${category}`}
						className={twMerge(
							'slick-slide-item',
							active === category && 'slide-active',
						)}>
						<h3 className='capitalize text-start font-serif'>
							{category}
						</h3>
					</Link>
				))}
			</div>
			{renderScrollButton('left')}
			{renderScrollButton('right')}
		</div>
	);
});

SliderList.displayName = 'SliderList';

export default SliderList;
