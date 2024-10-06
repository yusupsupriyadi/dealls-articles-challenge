import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Terms of Service',
		description: 'Terms of Service Dealls Articles',
		twitter: {
			card: 'summary_large_image',
		},
	};
}

export default function TermsOfService() {
	return (
		<div className='max-w-3xl mx-auto px-4 py-8 md:py-12'>
			<div className='flex flex-wrap items-center text-sm gap-2'>
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

			<header className='text-start mb-8 mt-8 md:mb-12 md:mt-12'>
				<h1 className='text-3xl md:text-4xl font-bold mb-4 max-w-lg font-serif'>
					Terms of Service
				</h1>
			</header>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					1. Acceptance of Terms
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					By accessing or using Dealls Articles, you agree to be bound
					by these Terms of Service. If you do not agree to these
					terms, please do not use our website or services.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					2. Use of Services
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					You agree to use our services only for lawful purposes and
					in accordance with these Terms. You are prohibited from
					violating any applicable laws or regulations while using our
					website.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					3. Intellectual Property
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					All content on Dealls Articles, including text, graphics,
					logos, and software, is the property of Dealls Articles or
					its content suppliers and is protected by copyright laws.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					4. User Contributions
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					By submitting content to our website, you grant Dealls
					Articles a non-exclusive, royalty-free license to use,
					modify, and distribute your content in connection with our
					services.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					5. Limitation of Liability
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					Dealls Articles shall not be liable for any indirect,
					incidental, special, consequential, or punitive damages
					resulting from your use of our services or any content on
					our website.
				</p>
			</section>
		</div>
	);
}
