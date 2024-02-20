<script>
	export let likes;
</script>

<div id="likes-container">
	<h2>Likes: <strong>{likes}</strong></h2>

    Using GET:<br/>
	<button hx-get="/like" hx-trigger="click" hx-target="#likes-container">Like this project!</button>

    <br/><br/>
    Using POST:<br/>
    <button hx-post="/like" hx-trigger="click" hx-target="#likes-container">Like this project!</button>
</div>
