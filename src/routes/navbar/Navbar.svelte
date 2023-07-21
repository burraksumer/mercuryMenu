<script>
	import { page } from '$app/stores';
</script>

<nav class="bg-gray-100">
	<div class="flex py-5 min-w-max">
		<a href="/" class="m-auto">
			<img src="./logo.svg" alt="Mercury Cafe" height="80" width="80" class="inline-block m-0" />
		</a>

		<div class="inline-block m-auto text-center">
			<a
				href="/about"
				class="px-6 py-2 m-2 text-sm font-medium text-gray-800 no-underline bg-gray-100 border rounded shadow-md"
				class:active={$page.url.pathname.includes('/about')}>Hakkımızda</a
			>
			<a
				href="/menu"
				data-sveltekit-preload-code="eager"
				class="px-6 py-2 m-2 text-sm font-medium text-gray-800 no-underline bg-gray-100 border rounded shadow-md"
				class:active={$page.url.pathname.includes('/menu')}>Menü</a
			>
		</div>
	</div>
	<hr class="mt-0" />
</nav>

<style lang="postcss">
	.active {
		background-color: #e5e7eb !important;
	}
</style>
