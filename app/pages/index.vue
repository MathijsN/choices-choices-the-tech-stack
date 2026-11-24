<script setup>
import content from '~/data/content.yml'
import Hero from '~/components/organisms/Hero.vue';
import Why from '~/components/organisms/Why.vue';
import Joinus from '~/components/organisms/Joinus.vue';
</script>

<template>
    <main>
        <Hero v-bind="content.hero" />
        <Why v-bind="content.why" />
        <Joinus v-bind="content.getInvolved" />
    </main>
</template>
