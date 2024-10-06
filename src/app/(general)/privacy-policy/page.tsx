import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Privacy Policy',
		description: 'Privacy Policy Dealls Articles',
		twitter: {
			card: 'summary_large_image',
		},
	};
}

export default function PrivacyPolicy() {
	return (
		<div className='max-w-3xl mx-auto px-4 py-8 md:py-12'>
			<div className='flex items-center text-sm gap-2'>
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
					Privacy Policy
				</h1>
			</header>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					1. Introduction
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					At Dealls Articles, we are committed to protecting your
					privacy and ensuring the security of your personal
					information. This Privacy Policy outlines how we collect,
					use, disclose, and safeguard your data when you use our
					website and services.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					2. Information We Collect
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					We may collect personal information such as your name, email
					address, and other details you provide when interacting with
					our website. We also collect non-personal information like
					browser type, IP address, and pages visited to improve our
					services.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					3. How We Use Your Information
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					We use the collected information to provide and improve our
					services, personalize your experience, communicate with you,
					and comply with legal obligations. We do not sell your
					personal information to third parties.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					4. Data Security
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					We implement appropriate technical and organizational
					measures to protect your personal information against
					unauthorized access, alteration, disclosure, or destruction.
				</p>
			</section>

			<section className='mb-8 md:mb-12'>
				<h2 className='text-xl md:text-2xl font-semibold mb-3 md:mb-4'>
					5. Your Rights
				</h2>
				<p className='text-base md:text-lg text-gray-700 leading-relaxed mb-3 md:mb-4'>
					You have the right to access, correct, or delete your
					personal information. If you have any questions or concerns
					about our Privacy Policy, please contact us.
				</p>
			</section>
		</div>
	);
}
