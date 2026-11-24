<script setup>
import Sectiontitle from '../atoms/Sectiontitle.vue';

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  reasons: { type: Array, default: () => [] } // [{ content, href, variant }]
})
</script>

<template>
  <section id="waarom-prologg" class="why-section">
    <div class="why-content">
      <header>
        <Sectiontitle :title="title" :subtitle="subtitle" />
      </header>

      <dl class="why-reasons">
        <template v-for="reason in reasons" :key="reason.title">
          <dt>{{ reason.title }}</dt>
          <dd>{{ reason.description }}</dd>
        </template>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  container: why-prologg / inline-size;
  inline-size: 100%;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}

#waarom-prologg {
  scroll-margin-block-start: 6rem;
}

.why-content {
  box-sizing: border-box;
  inline-size: 100%;
  max-inline-size: 75rem;
  margin-inline: auto;

  @container why-prologg (width >=640px) {
    padding: 3.5rem 2rem;
  }

  @container why-prologg (width >=960px) {
    padding: 4rem;
  }
}

.why-reasons {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  margin: 0;

  @container why-prologg (width >=960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto 1fr;
    grid-auto-flow: column;
    column-gap: 2rem;
  }

  dt {
    min-inline-size: 0;
    padding-block-start: 1.25rem;
    border-block-start: var(--border-usp);
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.4;

    &:first-of-type {
      margin-block-start: 0;
    }

    @container why-prologg (width >=960px) {
      margin-block-start: 0;
    }
  }

  dd {
    min-inline-size: 0;
    max-inline-size: 60ch;
    margin: 0;
    padding-block-start: 0.625rem;
    font-size: var(--font-size-body);
    line-height: 1.6;
    padding-bottom: var(--space-sm);
  }
}
</style>