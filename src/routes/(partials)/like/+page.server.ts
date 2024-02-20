import type { Actions } from './$types';

let likes = 0;
export const load: PageLoad = () => {
	likes++;
	return {
		likes
	};
};

export const actions = {
	default: async (event) => {
		console.log("Form action triggered!");
		likes++;
		return { hello: 'world' }
	},
} satisfies Actions;