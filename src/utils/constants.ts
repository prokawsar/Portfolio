export type Blog = {
	author: string;
	content: string;
	date: string;
	draft: boolean;
	image: string;
	next: any;
	prev: any;
	slug: string;
	summary: string;
	tag: any;
	tags: string[];
	title: string;
	youtube: any;
	type: string;
};

export type Author = {
	id: string;
	name: string;
	avatar?: string;
	occupation?: string;
	company?: string;
	email?: string;
	twitter?: string;
	linkedin?: string;
	github?: string;
};

export interface Issue {
	title: string;
	labels: string[];
	user: string;
	user_avatar: string;
	date: string;
	repo: string;
	number: number;
	platforms: string[];
	languages: string[];
}
