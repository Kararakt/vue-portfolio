<script setup lang="ts">
import './ProjectItem.scss';

import { Project } from '../../models/models';

defineProps<{ project: Project }>();
</script>

<template>
  <div class="project-item">
    <img
      :src="project.src"
      :alt="`Фото проекта ${project.title}`"
      class="project-item__image"
    />
    <div class="project-item__info">
      <h3 class="project-item__title">{{ project.title }}</h3>
      <p class="project-item__text">{{ project.mainSkill }}</p>
      <RouterLink :to="`/${project.title}`" class="project-item__link">
        Подробнее
      </RouterLink>
    </div>
  </div>
</template>
