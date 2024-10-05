import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: {
		default: 'Dealls Articles',
		template: '%s | Dealls Articles',
	},
	description: 'Dealls Articles come here',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Navbar />
				<main className='container mx-auto px-6 lg:px-0'>
					{children}
				</main>
				<Analytics />
			</body>
		</html>
	);
}
