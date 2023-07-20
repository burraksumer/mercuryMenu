<script>
	import '../app.css';
	import CTA from './CTA/CTA.svelte';
	import Navbar from './navbar/Navbar.svelte';
	import Transition from './transition/transition.svelte';
	export let data;
</script>

<div class="min-h-screen overflow-hidden bg-gray-100 min-w-screen">
	<Navbar />
	<div class="w-screen min-h-screen p-4 m-auto prose bg-gray-100">
		<div class="grid">
			<Transition url={data.url}>
				<slot />
			</Transition>
		</div>
	</div>
	<CTA />
</div>
