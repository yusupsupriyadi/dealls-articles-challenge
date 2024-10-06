import React from 'react';

export default function LoadingSkeleton() {
	return (
		<div className='py-6 md:py-8'>
			<div className='animate-pulse'>
				<div className='h-6 w-1/2 bg-gray-300/50 rounded-sm mb-2'></div>
				<div className='h-20 w-full bg-gray-300/50 rounded-sm mb-2'></div>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-1'>
						<div className='h-4 w-4 bg-gray-300/50 rounded-full'></div>
						<div className='h-3 w-10 bg-gray-300/50 rounded-sm'></div>
					</div>
					<div className='flex items-center gap-1'>
						<div className='h-4 w-4 bg-gray-300/50 rounded-full'></div>
						<div className='h-3 w-10 bg-gray-300/50 rounded-sm'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
