<script>
	import { page } from '$app/stores';
</script>

<a
	href="/menu"
	data-sveltekit-preload-code="eager"
	class="fixed bottom-0 w-screen px-6 py-6 text-2xl font-bold text-center text-gray-800 no-underline align-middle btn variant-filled"
	class:hidden={$page.url.pathname.includes('/menu')}>Menüye göz at👀</a
>
