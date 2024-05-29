<script setup lang="ts">
import './SectionHeader.scss';

interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div class="section-header">
    <p class="section-header__title">{{ title }}</p>
    <h2 class="section-header__subtitle">{{ subtitle }}</h2>
  </div>
</template>
