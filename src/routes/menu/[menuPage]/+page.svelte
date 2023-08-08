<script>
	import { page } from '$app/stores';
	export let data;
	const { coffees } = data;

	let itemNumber = 7;
</script>

<div class="space-y-4">
	{#await data.streamed.coffees}
		<div class="h-10 m-5 placeholder animate-pulse h1" />
		{#each { length: itemNumber } as _, i}
			<section class="w-full p-4 space-y-4 card">
				<div class="grid grid-cols-3 gap-4 animate-pulse">
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-1 gap-8 animate-pulse">
					<div class="placeholder" />
				</div>
			</section>
		{/each}
	{:then coffees}
		<h2 class="m-5 text-center h1">{coffees[0].name}</h2>
		{#each coffees.slice(1) as coffee}
			<div class="block card space-y-2 m-auto min-h-[100px] card-hover">
				<img
					src={coffee.img.length > 0 ? coffee.img : ''}
					alt="Koleksiyon Fotoğrafı"
					class={coffee.img.length > 0 ? 'm-0 object-cover' : 'hidden'}
				/>
				<div class="flex">
					<div class="flex-1">
						<header class="mb-1 font-bold card-header">{coffee.name}</header>
						<section class="card-footer">{coffee.desc}</section>
					</div>
					<div class="flex flex-col p-5 m-auto font-bold text-center">
						<span>{coffee.price}</span>
						<span>{coffee.doublePrice}</span>
					</div>
				</div>
			</div>
		{/each}
	{/await}
</div>
