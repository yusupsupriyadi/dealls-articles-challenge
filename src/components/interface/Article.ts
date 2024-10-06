export interface Article {
	id: number;
	title: string;
	body: string;
	views: number;
	reactions: { likes: number };
	tags: string[];
}
