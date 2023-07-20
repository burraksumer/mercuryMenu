<script>
	import { page } from '$app/stores';
	export let data;
	const { coffees } = data;
	const collectionName = $page.params.menuPage;
	console.log($page.params);
	console.log(coffees);
</script>

<h1 class="m-auto mt-5 mb-5">{coffees[0].name}</h1>

{#each coffees.slice(1) as coffee}
	<div class="m-auto my-5">
		<div class="w-screen max-w-sm overflow-hidden border rounded shadow-md">
			<img
				src={coffee.img.length > 0 ? coffee.img : ''}
				alt="Coffee"
				class={coffee.img.length > 0 ? 'm-0 object-cover' : 'hidden'}
			/>
			<div class="px-6 py-4">
				<div class="mb-2 text-xl font-bold min-w-[90%] inline-block align-top">
					{coffee.name}
				</div>
				<div class="inline-block">
					<div class="m-auto text-xl font-bold text-right">
						{coffee.price}
					</div>
					<div class="m-auto text-xl font-bold text-right">
						{coffee.doublePrice}
					</div>
				</div>
				<p class="inline-block mt-0 text-base text-gray-700">{coffee.desc}</p>
			</div>
		</div>
	</div>
{/each}
