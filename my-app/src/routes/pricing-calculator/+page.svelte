<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let seats = $state(1);
	let usage = $state(0); // Monthly usage in units, e.g., requests per month, GB of storage, etc. Default to 0;
	let discountTier = $state('none');

	const basePrice = 10; // Price per seat
	const usageRate = 0.05; // Price per unit of usage
	const discounts: Record<string, number> = {
		none: 0,
		small: 0.1,
		medium: 0.15,
		large: 0.2
	};

	// Reactive statement to update totalPrice when seats, usage, or discountTier changes
	let seatCost = $derived(seats * basePrice);
	let usageCost = $derived(usage * usageRate);
	let subtotal = $derived(seatCost + usageCost);
	let discount = $derived(subtotal * discounts[discountTier]);
	let totalPrice = $derived(subtotal - discount);
</script>

<div class="mx-auto mt-4 w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
	<div class="space-y-4 p-6">
		<h2 class="text-2xl font-bold">SaaS Pricing Calculator</h2>
		<p class="text-gray-600">
			Calculate your monthly subscription based on seats, usage, and applicable discounts.
		</p>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="space-y-2">
				<label for="seats" class="block text-sm font-medium text-gray-700">Number of Seats</label>
				<input
					id="seats"
					type="number"
					min="1"
					bind:value={seats}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>
			<div class="space-y-2">
				<label for="usage" class="block text-sm font-medium text-gray-700">Monthly Usage</label>
				<input
					id="usage"
					type="number"
					min="0"
					bind:value={usage}
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				/>
			</div>
		</div>

		<div class="space-y-2">
			<label for="discount" class="block text-sm font-medium text-gray-700">Discount Tier</label>
			<select
				id="discount"
				bind:value={discountTier}
				class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			>
				<option value="none">None</option>
				<option value="small">Small Business (10% off)</option>
				<option value="medium">Medium Business (15% off)</option>
				<option value="large">Enterprise (20% off)</option>
			</select>
		</div>

		<table class="min-w-full divide-y divide-gray-200">
			<thead class="bg-gray-50">
				<tr>
					<th class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
						>Item</th
					>
					<th
						class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
						>Cost</th
					>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				<tr>
					<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
						>Seats ({seats} @ ${basePrice}/seat)</td
					>
					<td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
						>${(seats * basePrice).toFixed(2)}</td
					>
				</tr>
				<tr>
					<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
						>Usage ({usage} units @ ${usageRate}/unit)</td
					>
					<td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
						>${(usage * usageRate).toFixed(2)}</td
					>
				</tr>
				<tr>
					<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">Subtotal</td>
					<td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
						>${(seats * basePrice + usage * usageRate).toFixed(2)}</td
					>
				</tr>
				<tr>
					<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500"
						>Discount ({(discounts[discountTier] * 100).toFixed(0)}%)</td
					>
					<td class="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500"
						>-${((seats * basePrice + usage * usageRate) * discounts[discountTier]).toFixed(2)}</td
					>
				</tr>
			</tbody>
		</table>

		<div class="mt-4 text-right">
			<p class="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}/month</p>
		</div>
	</div>
</div>
