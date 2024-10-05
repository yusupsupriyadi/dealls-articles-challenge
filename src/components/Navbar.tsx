import React from 'react';

export default function Navbar() {
	return (
		<nav className="bg-primary py-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<h1 className="text-2xl font-bold text-white">Dealls Articles</h1>
					<ul className="ml-8 flex space-x-6">
						<li><a href="#" className="text-white hover:text-gray-200">Beranda</a></li>
						<li><a href="#" className="text-white hover:text-gray-200">Tentang</a></li>
						<li><a href="#" className="text-white hover:text-gray-200">Tulis</a></li>
					</ul>
				</div>
				<div className="flex items-center">
					<input
						type="text"
						placeholder="Cari artikel..."
						className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
					/>
					<button className="ml-4 bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
						Masuk
					</button>
				</div>
			</div>
		</nav>
	);
}
