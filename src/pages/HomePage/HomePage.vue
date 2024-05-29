<script setup lang="ts">
import './HomePage.scss';

import Main from './Main/Main.vue';
import About from './About/About.vue';
import Skills from './Skills/Skills.vue';
import Projects from './Projects/Projects.vue';
</script>

<template>
  <div class="home">
    <Main />
    <About />
    <Skills />
    <Projects />

    <section class="home__scroll">
      <RouterLink to="/" class="home__button" />
    </section>
  </div>
</template>
