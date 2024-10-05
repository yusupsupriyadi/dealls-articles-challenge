'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='bg-primary py-4'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center'>
					<Link href='/' className='text-2xl font-bold text-white'>
						Dealls Articles
					</Link>
					<div className='hidden md:flex items-center space-x-6'>
						<a
							href='#'
							className='text-white hover:text-gray-200'>
							Beranda
						</a>
						<a
							href='#'
							className='text-white hover:text-gray-200'>
							Tentang
						</a>
						<a
							href='#'
							className='text-white hover:text-gray-200'>
							Tulis
						</a>
					</div>
					<div className='hidden md:flex items-center'>
						<input
							type='text'
							placeholder='Cari artikel...'
							className='px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<button className='ml-4 bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300'>
							Masuk
						</button>
					</div>
					<button
						className='md:hidden text-white'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
				{isMenuOpen && (
					<div className='mt-4 md:hidden'>
						<ul className='flex flex-col space-y-4'>
							<li>
								<a
									href='#'
									className='text-white hover:text-gray-200'>
									Beranda
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-white hover:text-gray-200'>
									Tentang
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-white hover:text-gray-200'>
									Tulis
								</a>
							</li>
						</ul>
						<div className='mt-4'>
							<input
								type='text'
								placeholder='Cari artikel...'
								className='w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary'
							/>
							<button className='mt-4 w-full bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300'>
								Masuk
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
