<script setup lang="ts">
import './ProjectPage.scss';

import { projects } from '../../utils/constants';

const router = useRoute();
const id = router.params.id;

const project = computed(() => projects.filter((item) => item.title === id)[0]);
</script>

<template>
  <section class="project">
    <div class="project__hero">
      <div class="project__hero-content">
        <h1 class="project__hero-title">{{ project.title }}</h1>
      </div>
    </div>

    <div class="project__details">
      <img
        :src="project.src"
        :alt="`Проект ${project.title}`"
        class="project__image"
      />
      <h3 class="project__title">Обзор проекта</h3>
      <p class="project__text">{{ project.description }}</p>
      <h3 class="project__title">Используемые навыки</h3>
      <ul class="project__skills">
        <li v-for="skill in project.skills" :key="skill" class="project__skill">
          {{ skill }}
        </li>
      </ul>
      <h3 class="project__title">Смотрите вживую</h3>
      <div class="project__links">
        <a
          :href="project.demoURL"
          rel="noreferrer"
          target="_blank"
          class="project__link"
        >
          Ссылка на код
        </a>
        <a
          :href="project.githubURL"
          rel="noreferrer"
          target="_blank"
          class="project__link"
        >
          Репозиторий
        </a>
      </div>
    </div>
  </section>
</template>
