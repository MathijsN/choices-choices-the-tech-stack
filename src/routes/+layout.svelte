<script>
	let { children } = $props();

	import { lang } from "$lib/lang.svelte.js";
	import { content } from "$lib/content.js";

	const c = $derived(content[lang.current]);
</script>

<svelte:head></svelte:head>

{@render children()}
