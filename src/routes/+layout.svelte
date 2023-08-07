<script>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-vintage.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><img src="/logo.svg" alt="Kahve İkonu" class="h-14" /></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="/about" rel="noreferrer"> Hakkımızda </a>
				<a class="btn btn-sm variant-ghost-surface" href="/menu" rel="noreferrer"> Menü </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="p-5 m-auto max-w-lg" id="page">
		<slot />
	</div>
</AppShell>
