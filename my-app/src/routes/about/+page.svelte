<script lang="ts">
	import type { PageData } from './$types';

	interface TeamMember {
		name: string;
		role: string;
		image: string;
	}

	interface HistoryItem {
		year: number;
		event: string;
	}

	let { data }: { data: PageData } = $props();

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let teamMembers = $state([
		{ name: 'Alice Johnson', role: 'CEO', image: '/placeholder.svg?height=100&width=100' },
		{ name: 'Bob Smith', role: 'CTO', image: '/placeholder.svg?height=100&width=100' },
		{ name: 'Carol Williams', role: 'COO', image: '/placeholder.svg?height=100&width=100' }
	]);

	let companyHistory = $state([
		{ year: 2020, event: 'Company founded' },
		{ year: 2021, event: 'Launched first product' },
		{ year: 2022, event: 'Expanded to international markets' },
		{ year: 2023, event: 'Reached 1 million users' }
	]);

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-center text-4xl font-bold">About Our Company</h1>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Our Mission</h2>
		<p class="text-lg">
			Our mission is to revolutionize the way people interact with technology, making it more
			intuitive, accessible, and beneficial for everyone.
		</p>
	</section>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Our Team</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each teamMembers as member}
				{@render TeamMember(member)}
			{/each}
		</div>
	</section>

	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Company History</h2>
		<ul class="space-y-4">
			{#each companyHistory as { year, event }}
				{@render HistoryItem({ year, event })}
			{/each}
		</ul>
	</section>

	{#if isVisible}
		<section transition:fade={{ duration: 300 }}>
			<h2 class="mb-4 text-2xl font-semibold">Our Values</h2>
			<ul class="list-inside list-disc space-y-2">
				<li>Innovation: We constantly push the boundaries of what's possible.</li>
				<li>Integrity: We operate with honesty and transparency in all we do.</li>
				<li>Collaboration: We believe in the power of teamwork and diverse perspectives.</li>
				<li>Customer-Centric: Our customers' success is our success.</li>
			</ul>
		</section>
	{/if}
</div>

{#snippet TeamMember({ name, role, image }: TeamMember)}
	<div class="rounded-lg bg-white p-6 text-center shadow-md">
		<img src={image} alt={name} class="mx-auto mb-4 h-24 w-24 rounded-full" />
		<h3 class="text-xl font-semibold">{name}</h3>
		<p class="text-gray-600">{role}</p>
	</div>
{/snippet}

{#snippet HistoryItem({ year, event }: HistoryItem)}
	<li class="flex items-center space-x-4">
		<span class="text-xl font-bold text-blue-600">{year}</span>
		<span class="text-lg">{event}</span>
	</li>
{/snippet}

<style>
	:global(body) {
		background-color: #f0f4f8;
		color: #333;
	}
</style>
