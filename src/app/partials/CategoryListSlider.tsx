'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { FC, memo, useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';

interface ArrowButtonProps {
	direction: 'next' | 'prev';
	onClick?: () => void;
	className?: string;
	currentSlide: number;
	slideCount: number;
	slidesToShow: number;
}

const ArrowButton: FC<ArrowButtonProps> = memo(
	({
		direction,
		onClick,
		className,
		currentSlide,
		slideCount,
		slidesToShow,
	}) => {
		const Icon = direction === 'next' ? ChevronRight : ChevronLeft;
		const isEdge =
			direction === 'prev'
				? currentSlide === 0
				: currentSlide >= slideCount - slidesToShow;
		if (isEdge) return null;

		return (
			<Icon
				strokeWidth={1}
				className={`!text-white !h-7 !w-7 !z-50 ${className} cursor-pointer`}
				onClick={onClick}
			/>
		);
	},
);

ArrowButton.displayName = 'ArrowButton';

interface CategoryListProps {
	data: string[];
	className?: string;
}

const CategoryListSlider: FC<CategoryListProps> = ({ data, className = '' }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slidesToShow, setSlidesToShow] = useState(7);
	const sliderRef = useRef<Slider>(null);

	const handleBeforeChange = useCallback(
		(oldIndex: number, newIndex: number) => {
			setCurrentSlide(newIndex);
		},
		[],
	);

	const handleBreakpoint = useCallback(() => {
		const breakpoint = window.innerWidth;
		if (breakpoint <= 480) setSlidesToShow(3);
		else if (breakpoint <= 600) setSlidesToShow(5);
		else if (breakpoint <= 1024) setSlidesToShow(6);
		else setSlidesToShow(8);
	}, []);

	useEffect(() => {
		handleBreakpoint();
		window.addEventListener('resize', handleBreakpoint);
		return () => window.removeEventListener('resize', handleBreakpoint);
	}, [handleBreakpoint]);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		beforeChange: handleBeforeChange,
		onReInit: handleBreakpoint,
		nextArrow: (
			<ArrowButton
				direction='next'
				currentSlide={currentSlide}
				slideCount={data.length}
				slidesToShow={slidesToShow}
				className='absolute top-1/2 transform -translate-y-1/2 right-2'
			/>
		),
		prevArrow: (
			<ArrowButton
				direction='prev'
				currentSlide={currentSlide}
				slideCount={data.length}
				slidesToShow={slidesToShow}
			/>
		),
	};

	const isLastSlideVisible = currentSlide + slidesToShow >= data.length;
	const isFirstSlideVisible = currentSlide === 0;

	return (
		<div
			className={`slider-container relative border-b border-gray-300 pb-4 ${className}`}>
			<Slider
				ref={sliderRef}
				{...settings}>
				{data.map((category, index) => (
					<Link
						key={category}
						href={`/category/${category}`}
						className='category-item'>
						<h3
							className={`capitalize text-start
                                ${
									index === currentSlide &&
									!isFirstSlideVisible &&
									'bg-gradient-to-l from-white to-transparent bg-clip-text text-transparent'
								}
                                ${
									index === currentSlide + slidesToShow - 1 &&
									!isLastSlideVisible &&
									'bg-gradient-to-l from-transparent to-white bg-clip-text text-transparent'
								}
                            `}>
							{category}
						</h3>
					</Link>
				))}
			</Slider>
		</div>
	);
};

export default memo(CategoryListSlider);
