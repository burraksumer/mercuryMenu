<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';
	import animationData from '../../lotties/eyes.json';

	onMount(() => {
		lottie.loadAnimation({
			container: document.getElementById('eyes'),
			animationData,
			loop: true,
			autoplay: true
		});
	});
</script>

<a
	href="/menu"
	data-sveltekit-preload-code="eager"
	class="fixed bottom-0 w-screen px-6 py-6 text-2xl font-bold text-center text-gray-800 no-underline align-middle bg-orange-100"
	class:hidden={$page.url.pathname.includes('/menu')}
	>Menüye göz at <span class="inline-block w-8 h-8 m-0 align-top" id="eyes" /></a
>
