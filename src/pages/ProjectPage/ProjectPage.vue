<script setup lang="ts">
import './ProjectPage.scss';

import { projects } from '../../utils/constants';

interface Link {
  id: number;
  title: string;
  href: string;
}

const originalTitle = ref(document.title);

const router = useRoute();
const id = router.params.id;

const project = computed(() => projects.filter((item) => item.title === id)[0]);

const links: Link[] = [
  {
    id: 1,
    title: 'Ссылка на просмотр',
    href: project.value.demoURL,
  },
  {
    id: 2,
    title: 'Репозиторий',
    href: project.value.githubURL,
  },
];

watch(
  router,
  () => {
    document.title = `Проект ${project.value.title}`;
  },
  {
    immediate: true,
  }
);

onBeforeRouteLeave((_to, _from, next) => {
  document.title = originalTitle.value;
  next();
});
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
          v-for="link in links"
          :key="link.id"
          :href="link.href"
          rel="noreferrer"
          target="_blank"
          class="project__link"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </section>
</template>
