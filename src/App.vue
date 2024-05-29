<script setup lang="ts">
import './App.scss';

import Header from './layouts/Header/Header.vue';

const shadow = ref(false);

const handleShadow = () => {
  if (window.scrollY >= 100) {
    shadow.value = true;
  } else {
    shadow.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleShadow);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShadow);
});
</script>

<template>
  <div class="app">
    <div :class="['app__header', { app__header_scroll: shadow }]">
      <Header />
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>
