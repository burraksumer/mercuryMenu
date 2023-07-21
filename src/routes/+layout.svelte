<script>
	import '../app.css';
	import CTA from './CTA/CTA.svelte';
	import Head from './head/Head.svelte';
	import Navbar from './navbar/Navbar.svelte';
	import Transition from './transition/transition.svelte';
	export let data;
</script>

<Head />

<div class="min-h-screen overflow-hidden bg-gray-100 min-w-screen">
	<Navbar />
	<div class="min-h-screen p-4 m-auto prose bg-gray-100 max-w-screen">
		<div class="grid">
			<Transition url={data.url}>
				<slot />
			</Transition>
		</div>
	</div>
	<CTA />
</div>
