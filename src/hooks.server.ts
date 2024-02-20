import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { version } from '$app/environment';

export const htmx: Handle = ({ event, resolve }) => {
	const isHtmxRequest = event.request.headers.get('hx-request') === 'true';
	console.log('isHtmxRequest', isHtmxRequest);
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(
				'%htmx%',
				!isHtmxRequest ? 
                `<script src="/htmx.min.js?version=${version}"></script>
                <script src="/htmx-loading-states.js?version=${version}"></script>
                ` : ''
			)
	});
};

export const handle = sequence(htmx);
