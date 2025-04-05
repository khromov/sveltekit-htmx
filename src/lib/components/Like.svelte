<script>
	export let likes;
</script>

<div id="likes-container">
	<h2>Likes: <strong>{likes}</strong></h2>

	<br /><br />

	Using POST:<br />
	<button
		hx-post="/like"
		hx-headers={'{"Accept": "text/html"}'}
		hx-trigger="click"
		hx-target="#likes-container">Like this project!</button
	>

	<br /><br />

	Using a form:<br />
	<form
		hx-post="/like"
		hx-headers={'{"Accept": "text/html"}'}
		hx-trigger="submit"
		hx-target="#likes-container"
	>
		<input type="submit" value="Like this project!" />
	</form>
</div>
