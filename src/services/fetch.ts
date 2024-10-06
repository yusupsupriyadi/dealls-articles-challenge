import axios from 'axios';

export async function fetchData<T>(url: string, params?: Record<string, string>): Promise<T> {
	try {
		const response = await axios.get<T>(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
			headers: {
				'Cache-Control': 'max-age=3600',
			},
			params: params || {},
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
		throw new Error(`Gagal mengambil data dari ${url}`);
	}
}