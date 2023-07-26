<script>
	export let data;
	const { collections } = data;
</script>

<h2 class="m-0 mt-5 text-center">Seçenekleriniz</h2>

{#each collections as collection}
	<div class="m-auto my-5">
		<a href={collection.href} class="no-underline">
			<div class="m-auto overflow-hidden border rounded shadow-md max-w-screen">
				<div class="px-6 py-4">
					<div class="mb-2 text-xl font-bold">{collection.name}</div>
					<p class="text-base text-gray-700">{collection.desc}</p>
				</div>
			</div>
		</a>
	</div>
{/each}
