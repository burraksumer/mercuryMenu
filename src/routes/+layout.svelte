<script>
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { afterNavigate } from '$app/navigation';
	import CTA from '../lib/CTA/CTA.svelte';
	import Navbar from '../lib/navbar/navbar.svelte';
	import Head from '../lib/head/Head.svelte';

	afterNavigate(() => {
		document.getElementById('page')?.scrollTo(0, 0);
	});
</script>

<Head />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><img src="/logo.svg" alt="Kahve İkonu" class="h-14" /></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Navbar />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<div class="m-auto max-w-lg p-5" id="page">
		<slot />
	</div>
	<CTA />
</AppShell>
