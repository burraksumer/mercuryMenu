<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import lottie from 'lottie-web';
	import animationData from '../lotties/404.json';

	onMount(() => {
		lottie.loadAnimation({
			container: document.getElementById('animation'),
			animationData,
			loop: true,
			autoplay: true
		});
	});
	console.log($page.error);
</script>

<div class="grid min-h-screen text-center place-content-center margin-auto pb-[75%]">
	<h1 class="mb-2">Ups...</h1>
	<h4 class="mt-2">Bir şeyler yanlış gitti :/</h4>

	<div class="m-auto my-10" id="animation" />

	<h4 class="">{$page.status}: {$page.error?.message}</h4>
</div>
