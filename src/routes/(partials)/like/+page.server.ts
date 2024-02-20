import type { PageLoad } from './$types';

let likes = 0;
export const load: PageLoad = () => {
	likes++;
	return {
		likes
	};
};