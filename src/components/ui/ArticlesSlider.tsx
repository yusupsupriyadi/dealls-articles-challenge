'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import { Article } from '../interface/Article';

export default function ArticlesSlider({ data }: { data: Article[] }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dotsClass: 'slick-dots',
		customPaging: (i: number) => (
			<div
				key={i}
				className=' rounded-full dark:bg-gray-500 bg-gray-300 mt-2 !h-3 !w-3'
			/>
		),
	};

	return (
		<div className='slider-container rounded-lg overflow-hidden dark:shadow-gray-700'>
			<Slider {...settings}>
				{data.slice(0, 5).map((item: Article) => (
					<div key={item.id}>
						<Link
							aria-label={`Read: ${item.title}`}
							href={`/article/${item.id}`}>
							<article className='relative h-40 md:h-64'>
								<div className='absolute inset-0 flex flex-col justify-center items-start p-1'>
									<h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 line-clamp-1 dark:text-gray-100'>
										{item.title}
									</h2>
									<p className='text-base md:text-xl mb-3 md:mb-6 line-clamp-2 dark:text-gray-300'>
										{item.body.substring(0, 100)}...
									</p>
									<span className='bg-primary text-white px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-sm md:text-base'>
										Read More
									</span>
								</div>
							</article>
						</Link>
					</div>
				))}
			</Slider>
			<style jsx>{`
				:global(.slick-dots li.slick-active div) {
					opacity: 1;
				}
			`}</style>
		</div>
	);
}
