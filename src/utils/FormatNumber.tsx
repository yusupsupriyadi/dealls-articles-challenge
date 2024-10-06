export default function FormatNumber(
	value: number,
	type: 'thousands' | 'millions' | 'billions',
) {
	if (type === 'thousands') {
		return value >= 1000 ? (value / 1000).toFixed(2) + 'K' : value;
	}
	if (type === 'millions') {
		return value >= 1000000 ? (value / 1000000).toFixed(2) + 'M' : value;
	}
	if (type === 'billions') {
		return value >= 1000000000
			? (value / 1000000000).toFixed(2) + 'B'
			: value;
	}
}
