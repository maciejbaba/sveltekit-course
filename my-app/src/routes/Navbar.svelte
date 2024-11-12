<script lang="ts">
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);
	let isScrolled = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	class={`sticky top-0 z-10 flex w-full justify-center rounded-md transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="flex-shrink-0">
					<img class="h-12 w-12" src="/test-brand.svg" alt="Logo" />
				</a>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<a
							href="/"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
							>Home</a
						>
						<a
							href="/about"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
							>About</a
						>
						<a
							href="/pricing-calculator"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
							>Pricing Calculator</a
						>
					</div>
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<button
					onclick={toggleMenu}
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					aria-controls="mobile-menu"
					aria-expanded={isMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					{#if isMenuOpen}
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<div class={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			<a
				href="/"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
				>Home</a
			>
			<a
				href="/about"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
				>About</a
			>
			<a
				href="/pricing-calculator"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
				>Pricing Calculator</a
			>
		</div>
	</div>
</nav>

<style>
	nav {
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;
	}
</style>
