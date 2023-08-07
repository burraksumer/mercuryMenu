<script>
	import { page } from '$app/stores';
</script>

<a
	class={$page.url.pathname.includes('/about')
		? 'btn btn-sm variant-filled-primary'
		: 'btn btn-sm variant-ghost-surface'}
	href="/about"
	rel="noreferrer"
>
	Hakkımızda
</a>
<a
	class={$page.url.pathname.includes('/menu')
		? 'btn btn-sm variant-filled-primary'
		: 'btn btn-sm variant-ghost-surface'}
	href="/menu"
	rel="noreferrer"
>
	Menü
</a>
