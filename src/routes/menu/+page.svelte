<script>
	import { each } from 'svelte/internal';

	export let data;
	const { collections } = data;

	let collectionNumber = 7;
</script>

<h2 class="h1 m-5 text-center">Seçeneklerimiz</h2>
<div class="space-y-4">
	{#await data.streamed.collections}
		{#each { length: collectionNumber } as _, i}
			<section class="card w-full p-4 space-y-4">
				<div class="grid grid-cols-3 gap-4 animate-pulse">
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-1 gap-8 animate-pulse">
					<div class="placeholder" />
				</div>
			</section>
		{/each}
	{:then collections}
		{#each collections as collection}
			<a href={collection.href} class="h-full">
				<div class="block card space-y-2 m-auto min-h-[100px] card-hover">
					<img
						src={collection.img.length > 0 ? collection.img : ''}
						alt="Koleksiyon Fotoğrafı"
						class={collection.img.length > 0 ? 'm-0 object-cover' : 'hidden'}
					/>
					<header class="card-header font-bold mb-1">{collection.name}</header>
					<section class="card-footer">{collection.desc}</section>
				</div>
			</a>
		{/each}
	{/await}
</div>
