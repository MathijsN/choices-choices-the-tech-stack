<script setup>
defineProps({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    subtitle: { type: String, default: '' }
})
</script>

<template>
    <hgroup>
        <span>{{ subtitle }}</span>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </hgroup>
</template>

<style scoped>
hgroup {
    padding-block: 0.5rem;
}
</style>