<script>
	export let data;
	const { collections } = data;

	let collectionNumber = 7;
</script>

<h2 class="h1 m-5 text-center">Seçeneklerimiz</h2>
<div class="space-y-4">
	{#await data.streamed.collections}
		{#each { length: collectionNumber } as _, i}
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
	{:then collections}
		{#each collections as collection}
			<a href={collection.href} class="h-full">
				<div class="card card-hover m-auto block min-h-[100px] space-y-2">
					<img
						src={collection.img.length > 0 ? collection.img : ''}
						alt="Koleksiyon Fotoğrafı"
						class={collection.img.length > 0 ? 'm-0 object-cover' : 'hidden'}
					/>
					<header class="card-header mb-1 font-bold">{collection.name}</header>
					<section class="card-footer">{collection.desc}</section>
				</div>
			</a>
		{/each}
	{/await}
</div>
