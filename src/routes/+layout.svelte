<script>
    import { page } from '$app/stores';
</script>

<h1>
   {$page?.data.title || 'No title found in page store'} 
</h1>

<div class="menu">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</div>

<div class="content">
    <slot />
</div>

<style>
    .content {
        margin-top: 8px;
    }
</style>