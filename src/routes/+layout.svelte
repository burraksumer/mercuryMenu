<script>
	import '../app.css';
	import { navigationIsDelayed } from '$lib/navigating.js';
	import CTA from './CTA/CTA.svelte';
	import Head from './head/head.svelte';
	import Navbar from './navbar/Navbar.svelte';
	import Transition from './transition/transition.svelte';
	import Loading from './loading/Loading.svelte';
	export let data;
</script>

<Head />

<div class="min-h-screen overflow-hidden bg-gray-100 min-w-screen">
	<Navbar />
	<div class="min-h-screen p-4 m-auto prose bg-gray-100 max-w-screen">
		<div class="grid">
			<Transition url={data.url}>
				{#if $navigationIsDelayed}
					<Loading />
				{/if}
				<slot />
			</Transition>
		</div>
	</div>
	<CTA />
</div>
