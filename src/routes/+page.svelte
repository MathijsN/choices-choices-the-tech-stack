<script>
    import Hero from "$lib/organisms/Hero.svelte";
    import WhyPrologg from "$lib/organisms/Whyprologg.svelte";
    import GetInvolved from "$lib/organisms/Getinvolved.svelte";

    import { lang } from "$lib/lang.svelte.js";
    import { content } from "$lib/content.js";

    const c = $derived(content[lang.current]);
</script>

<main>
    <Hero {...c.hero} />
    <WhyPrologg {...c.why} />
    <GetInvolved {...c.getInvolved} />
</main>
