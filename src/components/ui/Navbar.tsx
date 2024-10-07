'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLink, Search } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { Article } from '../interface/Article';
import { useDebounceValue, useOnClickOutside } from 'usehooks-ts';
import { fetchData } from '@/services/fetch';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [dataBySearch, setDataBySearch] = useState<{ posts: Article[] }>({
		posts: [],
	});
	const [searchTerm, setSearchTerm] = useState('');
	const [debouncedSearchTerm] = useDebounceValue<string>(searchTerm, 300);
	const inputRef = useRef<HTMLInputElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	const handleSearch = async (value: string) => {
		if (value.length > 2) {
			try {
				const response = await fetchData(`/posts/search`, {
					q: value,
					limit: '5',
					select: 'id,title',
				});

				setDataBySearch(response as { posts: Article[] });
			} catch (error) {
				console.error('Error fetching data:', error);
				setDataBySearch({ posts: [] });
			}
		} else {
			setDataBySearch({ posts: [] });
		}
	};

	useEffect(() => {
		handleSearch(debouncedSearchTerm);
	}, [debouncedSearchTerm]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleInputFocus = () => {
		setIsOpen(true);
	};

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useOnClickOutside(dropdownRef, () => setIsOpen(false));

	return (
		<nav className='bg-gradient-to-r to-purple-600 var-purple-900 from-purple-700 py-4'>
			<div className='mx-auto px-4 md:px-10'>
				<div className='flex justify-between md:items-center items-end'>
					<section className='flex items-center gap-4'>
						<div>
							<Link
								href='/'
								aria-label='Home'
								className='text-xl font-bold text-white'>
								Dealls Articles
							</Link>

							<div
								className='relative block md:hidden mt-2'
								ref={isMobile ? dropdownRef : null}>
								<input
									ref={inputRef}
									onChange={handleInputChange}
									onFocus={handleInputFocus}
									type='text'
									value={searchTerm}
									placeholder='Cari artikel...'
									className='w-64 px-2 py-2 pl-10 rounded-2xl text-sm focus:outline-none'
								/>
								<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />

								{isOpen && dataBySearch.posts.length !== 0 && (
									<div className='absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg dark:shadow-sm py-3'>
										{dataBySearch.posts.map(
											(item: Article) => (
												<Link
													aria-label={`Baca: ${item.title}`}
													href={`/article/${item.id}`}
													key={item.id}
													className='block px-4 py-2 leading-5 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
													onClick={() =>
														setIsOpen(false)
													}>
													{item.title}{' '}
													<ExternalLink className='w-4 h-4 inline-block ml-1' />
												</Link>
											),
										)}
									</div>
								)}
							</div>
						</div>

						<div
							className='relative hidden md:block'
							ref={isMobile ? null : dropdownRef}>
							<input
								ref={inputRef}
								onChange={handleInputChange}
								onFocus={handleInputFocus}
								type='text'
								value={searchTerm}
								placeholder='Cari artikel...'
								className='w-64 px-2 py-2 pl-10 rounded-2xl text-sm focus:outline-none'
							/>
							<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />

							{isOpen && dataBySearch.posts.length !== 0 && (
								<div className='absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-md shadow-lg dark:shadow-sm py-3'>
									{dataBySearch.posts.map((item: Article) => (
										<Link
											aria-label={`Baca: ${item.title}`}
											href={`/article/${item.id}`}
											key={item.id}
											className='block px-4 py-2 leading-5 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
											onClick={() => setIsOpen(false)}>
											{item.title}{' '}
											<ExternalLink className='w-4 h-4 inline-block ml-1' />
										</Link>
									))}
								</div>
							)}
						</div>
					</section>
					<DarkModeToggle />
				</div>
			</div>
		</nav>
	);
}
