'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { CSSProperties } from 'react';

const customStyles = {
	dots: {
		position: 'absolute',
		bottom: '0px',
		width: '100%',
		listStyle: 'none',
		textAlign: 'center',
		padding: 0,
	} as CSSProperties,
	dot: {
		backgroundColor: 'white',
		opacity: 0.6,
	} as CSSProperties,
	activeDot: {
		backgroundColor: 'white',
		opacity: 1,
	} as CSSProperties,
};

export default function ArticlesSlider() {
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
				style={{
					width: '10px',
					height: '10px',
					borderRadius: '50%',
					bottom: '0px',
					...customStyles.dot,
				}}
			/>
		),
	};

	const slides = [
		{
			id: 1,
			title: 'Artikel Terbaru',
			description: 'Baca artikel terbaru kami tentang teknologi',
		},
		{
			id: 2,
			title: 'Tips dan Trik',
			description:
				'Temukan tips dan trik untuk meningkatkan produktivitas Anda',
		},
		{
			id: 3,
			title: 'Berita Terkini',
			description: 'Dapatkan update terbaru dari dunia teknologi',
		},
	];

	return (
		<div className='slider-container rounded-lg overflow-hidden shadow-lg'>
			<Slider {...settings}>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className='relative h-40 md:h-56'>
						<div className='absolute inset-0 flex flex-col justify-center items-start text-white'>
							<h2 className='text-2xl md:text-4xl font-bold mb-2 md:mb-4'>
								{slide.title}
							</h2>
							<p className='text-base md:text-xl mb-3 md:mb-6'>
								{slide.description}
							</p>
							<button className='bg-primary text-white px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-sm md:text-base'>
								Baca Selengkapnya
							</button>
						</div>
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
