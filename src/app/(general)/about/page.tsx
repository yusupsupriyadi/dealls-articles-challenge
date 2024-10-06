import React from 'react';
import { Mail, Globe, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'About',
		description: 'About Dealls Articles',
		twitter: {
			card: 'summary_large_image',
		},
	};
}

export default function About() {
	return (
		<div className='max-w-3xl mx-auto px-4 py-12'>
			<div className='flex items-center text-sm gap-2'>
				<Link
					href='/about'
					aria-label='About'>
					About
				</Link>
				/
				<Link
					href='/privacy-policy'
					aria-label='Privacy'>
					Privacy
				</Link>
				/
				<Link
					href='/terms-of-service'
					aria-label='Terms'>
					Terms
				</Link>
			</div>

			<header className='text-start mb-12 mt-12'>
				<h1 className='text-4xl md:text-5xl lg:text-7xl font-bold mb-4 max-w-lg font-serif'>
					Hey You, keep growing
				</h1>
			</header>

			<section className='mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-4'>
					Our Mission
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-4'>
					Dealls Articles is dedicated to delivering high-quality
					content that inspires, educates, and entertains. We believe
					that knowledge is the key to personal and professional
					growth.
				</p>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed'>
					Through our articles, we strive to open new perspectives,
					spark meaningful discussions, and encourage our readers to
					continuously learn and develop.
				</p>
			</section>

			<section className='mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-4'>
					Our Team
				</h2>

				<div>
					<h3 className='text-lg md:text-xl font-semibold'>
						Yusup Supriyadi
					</h3>
					<p className='text-gray-600 mb-2'>Developer & Writer</p>
					<p className='text-gray-700'>
						An experienced web developer and passionate writer.
						Yusup combines his technical expertise with creativity
						to produce informative and engaging content.
					</p>
				</div>
			</section>

			<section className='mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-4'>
					Main Topics
				</h2>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
					{[
						'Technology',
						'Web Development',
						'Productivity',
						'Creativity',
						'Digital Business',
						'Lifestyle',
					].map((topic, index) => (
						<li
							key={index}
							className='bg-gray-100 rounded-lg p-3 text-center text-gray-700'>
							{topic}
						</li>
					))}
				</ul>
			</section>

			<section className='mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-4'>
					Contact Us
				</h2>
				<p className='text-base md:text-lg text-gray-700 mb-4'>
					We always enjoy hearing from our readers. Don&apos;t
					hesitate to reach out to us with questions, suggestions, or
					just to say hello!
				</p>
				<ul className='space-y-2'>
					<li className='flex items-center'>
						<Mail
							className='text-gray-600 mr-2'
							size={20}
						/>
						<a
							href='mailto:yusupsupriyadistudio@gmail.com'
							className='text-blue-600 hover:underline'>
							yusupsupriyadistudio@gmail.com
						</a>
					</li>
					<li className='flex items-center'>
						<Globe
							className='text-gray-600 mr-2'
							size={20}
						/>
						<a
							href='https://yusupsupriyadi.com'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'>
							yusupsupriyadi.com
						</a>
					</li>
					<li className='flex items-center'>
						<Linkedin
							className='text-gray-600 mr-2'
							size={20}
						/>
						<a
							href='https://www.linkedin.com/in/yusup-supriyd/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 hover:underline'>
							Yusup Supriyadi
						</a>
					</li>
				</ul>
			</section>

			<footer className='text-center text-gray-600'>
				<p>
					Thank you for visiting Dealls Articles. We hope you enjoy
					the content we provide and continue to return for more
					insights and inspiration!
				</p>
			</footer>
		</div>
	);
}
