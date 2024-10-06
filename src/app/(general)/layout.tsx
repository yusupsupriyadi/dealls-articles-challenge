import React from 'react';

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<div className='container mx-auto px-6 lg:px-0 mt-10'>{children}</div>
		</main>
	);
}
