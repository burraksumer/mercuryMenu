<script>
	import { page } from '$app/stores';
</script>

<div class="margin-auto grid min-h-screen place-content-center pb-[75%] text-center">
	<h1 class="h1 mb-2">Ups...</h1>
	<h2 class="h3 mb-10">Bir şeyler yanlış gitti :/</h2>

	<h1 class="h4">{$page.status}: {$page.error?.message}</h1>
</div>
