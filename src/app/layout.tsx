import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { Roboto, Lora } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['latin'],
	variable: '--font-roboto',
});

const lora = Lora({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-lora',
});

export const metadata: Metadata = {
	title: {
		default: 'Dealls Articles',
		template: '%s | Dealls Articles',
	},
	description:
		'Discover a world of knowledge with Dealls Articles. Our platform offers a diverse range of insightful content, from cutting-edge technology trends to in-depth business analyses. Explore expert opinions, industry insights, and thought-provoking discussions on various topics. Stay informed, inspired, and ahead of the curve with our carefully curated articles.',
	twitter: {
		card: 'summary_large_image',
		title: 'Dealls Articles - Your Source for Insightful Content',
		description:
			'Explore a wealth of knowledge on technology, business, and more. Join our community of curious minds today!',
	},
	keywords: [
		'articles',
		'technology',
		'business',
		'insights',
		'knowledge',
		'trends',
		'analysis',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body
				className={`${lora.variable} ${roboto.variable} font-lora antialiased`}>
				<ThemeProvider attribute='class'>
					<Navbar />
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
