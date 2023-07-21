<script>
	import '../app.css';
	import CTA from './CTA/CTA.svelte';
	import Navbar from './navbar/Navbar.svelte';
	import Transition from './transition/transition.svelte';
	export let data;
</script>

<svelte:head>
	<!-- OG Meta -->
	<meta name="title" content="Mercury Cafe Online Menü" />
	<meta name="description" content="Mercury Cafe'nin ürünlerini içeren online menü." />
	<meta
		name="keywords"
		content="Kahve, Çay, Mercury Cafe, Yiyecekler, Soğuk Meşrubatlar, Sıcak Kahveler, Soğuk Kahveler, Kokteyller"
	/>
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="Turkish" />
	<title>Mercury Cafe Online Menü</title>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mercury.mulayim.app" />
	<meta property="og:title" content="Mercury Cafe  — Online Menü" />
	<meta property="og:description" content="Mercury Cafe'nin ürünlerini içeren online menü." />
	<meta property="og:image" content="%sveltekit.assets%/favicon.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://mercury.mulayim.app" />
	<meta property="twitter:title" content="Mercury Cafe  — Online Menü" />
	<meta property="twitter:description" content="Mercury Cafe'nin ürünlerini içeren online menü." />
	<meta property="twitter:image" content="%sveltekit.assets%/favicon.png" />
</svelte:head>

<div class="min-h-screen overflow-hidden bg-gray-100 min-w-screen">
	<Navbar />
	<div class="min-h-screen p-4 m-auto prose bg-gray-100 max-w-screen">
		<div class="grid">
			<Transition url={data.url}>
				<slot />
			</Transition>
		</div>
	</div>
	<CTA />
</div>
