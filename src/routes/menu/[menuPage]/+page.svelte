<script>
	import { page } from '$app/stores';
	export let data;
	const { coffees } = data;

	let itemNumber = 7;
</script>

<div class="space-y-4">
	{#await data.streamed.coffees}
		<div class="h1 placeholder m-5 h-10 animate-pulse" />
		{#each { length: itemNumber } as _, i}
			<section class="card w-full space-y-4 p-4">
				<div class="grid animate-pulse grid-cols-3 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid animate-pulse grid-cols-1 gap-8">
					<div class="placeholder" />
				</div>
			</section>
		{/each}
	{:then coffees}
		<h2 class="h1 m-5 text-center">{coffees[0].name}</h2>
		{#each coffees.slice(1) as coffee}
			<div class="card card-hover m-auto block min-h-[100px] space-y-2">
				<img
					src={coffee.img.length > 0 ? coffee.img : ''}
					alt="Koleksiyon Fotoğrafı"
					class={coffee.img.length > 0 ? 'm-0 object-cover' : 'hidden'}
				/>
				<div class="flex">
					<div class="flex-1">
						<header class="card-header mb-1 font-bold">{coffee.name}</header>
						<section class="card-footer">{coffee.desc}</section>
					</div>
					<div class="m-auto flex flex-col p-5 text-center font-bold">
						<span>{coffee.price}</span>
						<span>{coffee.doublePrice}</span>
					</div>
				</div>
			</div>
		{/each}
	{/await}
</div>
