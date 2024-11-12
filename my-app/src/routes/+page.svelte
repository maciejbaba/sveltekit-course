<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let { children } = $props();

	interface FeatureCard {
		title: string;
		description: string;
		icon: string;
	}

	interface TestimonialCard {
		name: string;
		company: string;
		quote: string;
	}

	let features = $state([
		{
			title: 'Intuitive Design',
			description: 'Our user-friendly interface makes technology accessible to everyone.',
			icon: '💡'
		},
		{
			title: 'Powerful Analytics',
			description: 'Gain deep insights with our advanced data analysis tools.',
			icon: '📊'
		},
		{
			title: 'Secure & Reliable',
			description: 'Your data is safe with our state-of-the-art security measures.',
			icon: '🔒'
		},
		{
			title: '24/7 Support',
			description: 'Our dedicated team is always here to help you succeed.',
			icon: '🌟'
		}
	]);

	let testimonials = $state([
		{
			name: 'John Doe',
			company: 'Tech Innovators Inc.',
			quote: 'This product has revolutionized our workflow. Highly recommended!'
		},
		{
			name: 'Jane Smith',
			company: 'Global Solutions Ltd.',
			quote: "The customer support is unparalleled. They're always there when you need them."
		}
	]);

	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
	});

	function handleGetStarted() {
		alert('Get Started clicked! Add your sign-up logic here.');
	}
</script>

<main class="container mx-auto px-4 py-8">
	<section class="mb-16 text-center">
		<h1 class="mb-4 text-5xl font-bold">Welcome to Our Innovative Platform</h1>
		<p class="mb-8 text-xl">Empowering businesses with cutting-edge technology solutions</p>
		<button
			onclick={handleGetStarted}
			class="rounded bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700"
		>
			Get Started
		</button>
	</section>

	<section class="mb-16">
		<h2 class="mb-8 text-center text-3xl font-semibold">Our Features</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each features as feature}
				{@render FeatureCard(feature)}
			{/each}
		</div>
	</section>

	{#if isVisible}
		<section transition:fade={{ duration: 300 }} class="mb-16">
			<h2 class="mb-8 text-center text-3xl font-semibold">What Our Clients Say</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each testimonials as testimonial, index}
					{@render TestimonialCard(testimonial, index)}
				{/each}
			</div>
		</section>
	{/if}

	<section class="text-center">
		<h2 class="mb-4 text-3xl font-semibold">Ready to Transform Your Business?</h2>
		<p class="mb-8 text-xl">
			Join thousands of satisfied customers and take your operations to the next level.
		</p>
		<a
			href="/about"
			class="rounded bg-green-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-green-700"
		>
			Learn More About Us
		</a>
	</section>
</main>

{#snippet FeatureCard({ title, description, icon }: FeatureCard)}
	<div class="rounded-lg bg-white p-6 text-center shadow-md">
		<div class="mb-4 text-4xl">{icon}</div>
		<h3 class="mb-2 text-xl font-semibold">{title}</h3>
		<p>{description}</p>
	</div>
{/snippet}

{#snippet TestimonialCard({ name, company, quote }: TestimonialCard, index: number)}
	<div
		transition:fly={{ y: 50, duration: 300, delay: index * 100 }}
		class="rounded-lg bg-gray-100 p-6 shadow"
	>
		<p class="mb-4 italic">"{quote}"</p>
		<p class="font-semibold">{name}</p>
		<p class="text-sm text-gray-600">{company}</p>
	</div>
{/snippet}

<style>
	:global(body) {
		background-color: #f0f4f8;
		color: #333;
	}
</style>
