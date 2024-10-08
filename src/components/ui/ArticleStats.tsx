'use client';
import FormatNumber from '@/utils/FormatNumber';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Bookmark,
	BookmarkCheck,
	Eye,
	Facebook,
	Linkedin,
	Link as LinkIcon,
	Phone,
	Send,
	Share2,
	ThumbsUp,
	Twitter,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

export const ArticleStats: React.FC<{
	views: number;
	likes: number;
	title: string;
	className?: string;
	id: string;
}> = ({ views, likes, title, className = '', id }) => {
	const pathname = usePathname();
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(likes);

	const handleShare = (platform: string) => {
		const url =
			typeof window !== 'undefined'
				? window.location.origin +
				  (pathname === '/' ? `/article/${id}` : pathname)
				: '';
		let shareUrl = '';
		const encodedUrl = encodeURIComponent(url);
		const encodedTitle = encodeURIComponent(title);
		const twitterText = encodeURIComponent(`${title}\n${url}`);

		switch (platform) {
			case 'twitter':
				shareUrl = `https://x.com/intent/tweet?text=${twitterText}`;
				break;
			case 'facebook':
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
				break;
			case 'linkedin':
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}`;
				break;
			case 'whatsapp':
				shareUrl = `https://wa.me/?text=${encodeURIComponent(
					`${title}\n${url}`,
				)}`;
				break;
			case 'telegram':
				shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
				break;
		}

		if (shareUrl) {
			window.open(shareUrl, '_blank');
		}
	};

	const copyToClipboard = () => {
		const url =
			typeof window !== 'undefined'
				? window.location.origin +
				  (pathname === '/' ? `/article/${id}` : pathname)
				: '';
		navigator.clipboard.writeText(url).then(() => {
			// Add notification or feedback here if needed
		});
	};

	const sectionClasses = twMerge(
		'flex px-2 justify-between items-center py-3 mb-8 border-y border-gray-200 dark:border-gray-800 z-10',
		className,
	);

	const iconClasses = 'w-4 h-4 md:w-5 md:h-5 stroke-[1.2] ';
	const iconActionClasses = 'w-4 h-4 md:w-6 md:h-6 stroke-[1.2]';
	const textClasses = 'text-sm md:text-base';
	const statClasses =
		'flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 md:p-3';
	const dropdownItemClasses =
		'flex items-center gap-3 text-gray-800 dark:text-gray-400 p-3 md:p-4';
	const buttonClasses =
		'p-2 md:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary';

	return (
		<section className={sectionClasses}>
			<div className='flex items-center gap-4'>
				<div className={statClasses}>
					<Eye className={iconClasses} />
					<p className={textClasses}>
						{FormatNumber(views, 'thousands')}
					</p>
				</div>
				<button
					type='button'
					aria-label='Suka'
					className={twMerge(statClasses, buttonClasses)}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setIsLiked(!isLiked);
						setLikesCount(likesCount + (isLiked ? -1 : 1));
					}}>
					<ThumbsUp
						className={`${iconClasses} ${
							likesCount > likes ? '!stroke-2 !text-primary' : ''
						}`}
					/>
					<p
						className={twMerge(
							textClasses,
							likesCount > likes ? '!text-primary' : '',
						)}>
						{FormatNumber(likesCount, 'thousands')}
					</p>
				</button>
			</div>

			<div className='flex items-center gap-4'>
				<DropdownMenu>
					<DropdownMenuTrigger
						className={twMerge(
							buttonClasses,
							'focus:ring-offset-2',
						)}
						aria-label='Bagikan artikel'>
						<Share2
							className={twMerge(
								iconActionClasses,
								'text-gray-600 dark:text-gray-400',
							)}
						/>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='mt-4 space-y-2'>
						<DropdownMenuItem
							className={twMerge(
								dropdownItemClasses,
								'text-gray-600 dark:text-gray-400',
							)}
							onSelect={copyToClipboard}
							aria-label='Copy link'>
							<LinkIcon
								className={iconClasses}
								strokeWidth={1}
							/>
							<p
								className={twMerge(
									textClasses,
									'font-normal font-sans',
								)}>
								Copy link
							</p>
						</DropdownMenuItem>
						<DropdownMenuSeparator />

						<DropdownMenuItem
							className={dropdownItemClasses}
							aria-label='Share on Twitter'
							onSelect={() => handleShare('twitter')}>
							<Twitter
								className={iconClasses}
								strokeWidth={1}
							/>
							<p className={twMerge(textClasses, 'font-sans')}>
								Share on Twitter
							</p>
						</DropdownMenuItem>
						<DropdownMenuItem
							className={dropdownItemClasses}
							aria-label='Share on Facebook'
							onSelect={() => handleShare('facebook')}>
							<Facebook
								className={iconClasses}
								strokeWidth={1}
							/>
							<p className={twMerge(textClasses, 'font-sans')}>
								Share on Facebook
							</p>
						</DropdownMenuItem>
						<DropdownMenuItem
							className={dropdownItemClasses}
							aria-label='Share on LinkedIn'
							onSelect={() => handleShare('linkedin')}>
							<Linkedin
								className={iconClasses}
								strokeWidth={1}
							/>
							<p className={twMerge(textClasses, 'font-sans')}>
								Share on LinkedIn
							</p>
						</DropdownMenuItem>
						<DropdownMenuItem
							className={dropdownItemClasses}
							aria-label='Share on WhatsApp'
							onSelect={() => handleShare('whatsapp')}>
							<Phone
								className={iconClasses}
								strokeWidth={1}
							/>
							<p className={twMerge(textClasses, 'font-sans')}>
								Share on WhatsApp
							</p>
						</DropdownMenuItem>
						<DropdownMenuItem
							className={dropdownItemClasses}
							aria-label='Share on Telegram'
							onSelect={() => handleShare('telegram')}>
							<Send
								className={iconClasses}
								strokeWidth={1}
							/>
							<p className={twMerge(textClasses, 'font-sans')}>
								Share on Telegram
							</p>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<button
					type='button'
					aria-label={
						isBookmarked
							? 'Hapus bookmark artikel'
							: 'Bookmark artikel'
					}
					className={buttonClasses}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setIsBookmarked(!isBookmarked);
					}}>
					{isBookmarked ? (
						<BookmarkCheck
							className={twMerge(
								iconActionClasses,
								'!text-primary stroke-2',
							)}
						/>
					) : (
						<Bookmark
							className={twMerge(
								iconActionClasses,
								'text-gray-600 dark:text-gray-400',
							)}
						/>
					)}
				</button>
			</div>
		</section>
	);
};
