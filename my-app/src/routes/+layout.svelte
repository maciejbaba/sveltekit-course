<script lang="ts">
	import '../app.css';
	import Navbar from './Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<Navbar />
	{@render children()}
</div>
