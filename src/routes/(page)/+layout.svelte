<script>
	import { page } from '$app/stores';
</script>

<h1>
	{$page?.data.title || 'No title found in page store'}
</h1>

<div
	hx-boost="true"
	data-loading-target="#loading"
	data-loading-class-remove="hidden"
	data-loading-disable
	data-loading-delay="250"
>
	<div class="menu">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
		<a href="/slow">Slow page</a>
		<a href="/like">Like</a>
	</div>
</div>

<div id="loading" class="hidden">Loading ...</div>

<div id="content">
	<slot />
</div>

<style>
	#content {
		margin-top: 8px;
	}

	.hidden {
		display: none;
	}

	/* https://htmx.org/extensions/loading-states/ */
	:global([data-loading]) {
		display: none;
	}
</style>
