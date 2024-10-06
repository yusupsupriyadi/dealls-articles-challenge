'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const DarkModeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const buttonClasses = twMerge(
		'p-2 rounded-md border transition-colors duration-200 ease-in-out',
		'hover:bg-gray-200 dark:hover:bg-gray-700',
		'dark:bg-gray-900 bg-white',
	);

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={buttonClasses}>
			<Moon className='w-4 h-4 hidden dark:block dark:text-white text-black' />
			<Sun className='w-4 h-4 dark:hidden dark:text-white text-black' />
		</button>
	);
};

export default DarkModeToggle;
