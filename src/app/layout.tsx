import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { Roboto, Lora } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

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
	description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	twitter: {
		card: 'summary_large_image',
	},
	verification: {
		google: 'NyJCfLvmGSUuywoPDT4yQp9Ek5DDu8RoWzez1UJjMHM',
	},
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
			</body>
		</html>
	);
}
