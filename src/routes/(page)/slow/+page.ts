import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	await new Promise((r) => setTimeout(r, 5000));
	return {
		title: 'Slow page'
	};
};