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
}> = ({ views, likes, title, className = '' }) => {
	const pathname = usePathname();
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(likes);

	const handleShare = (platform: string) => {
		const url =
			typeof window !== 'undefined'
				? window.location.origin + pathname
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
				shareUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
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
		const url = typeof window !== 'undefined' ? window.location.href : '';
		navigator.clipboard.writeText(url).then(() => {
			// Add notification or feedback here if needed
		});
	};

	const sectionClasses = twMerge(
		'flex px-2 justify-between items-center py-3 mb-8 border-y border-gray-200 dark:border-gray-800 z-10',
		className,
	);

	const iconClasses = 'w-3 h-3 md:w-4 md:h-4 stroke-[1.2]';
	const iconActionClasses = 'w-3 h-3 md:w-5 md:h-5 stroke-[1.2]';
	const textClasses = 'text-xs md:text-sm';
	const statClasses =
		'flex items-center gap-1 text-gray-600 dark:text-gray-400';
	const dropdownItemClasses =
		'flex items-center gap-3 text-gray-800 dark:text-gray-400';

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
					className={statClasses}
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
					<DropdownMenuTrigger className='focus:outline-none'>
						<Share2
							className={twMerge(
								iconActionClasses,
								'text-gray-600 dark:text-gray-400',
							)}
						/>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='mt-4 space-y-3 p-2'>
						<DropdownMenuItem
							className={twMerge(
								dropdownItemClasses,
								'text-gray-600 dark:text-gray-400',
							)}
							onSelect={copyToClipboard}>
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
