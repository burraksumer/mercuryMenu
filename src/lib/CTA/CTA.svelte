<script>
	import { page } from '$app/stores';
</script>

<a
	href="/menu"
	data-sveltekit-preload-code="eager"
	class="btn variant-filled-surface fixed bottom-0 w-screen px-6 py-6 text-center align-middle text-2xl font-bold no-underline"
	class:hidden={$page.url.pathname.includes('/menu')}>Menüye göz at👀</a
>
