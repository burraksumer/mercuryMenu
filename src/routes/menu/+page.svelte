<script>
	export let data;
	const { collections } = data;
</script>

<h2 class="m-0 mt-5 text-center">Seçenekleriniz</h2>

{#each collections as collection}
	<div class="m-auto my-5">
		<a href={collection.href} data-sveltekit-preload-code="eager" class="no-underline">
			<div class="w-screen max-w-sm m-auto overflow-hidden border rounded shadow-md">
				<div class="px-6 py-4">
					<div class="mb-2 text-xl font-bold">{collection.name}</div>
					<p class="text-base text-gray-700">{collection.desc}</p>
				</div>
			</div>
		</a>
	</div>
{/each}
