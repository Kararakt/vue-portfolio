<script setup lang="ts">
import './Projects.scss';

import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';
import ProjectItem from '../../../components/ProjectItem/ProjectItem.vue';

import { projects } from '../../../utils/constants';
</script>

<template>
  <section id="projects" class="projects">
    <SectionHeader title="Проекты" subtitle="То, что я создал" />
    <div class="projects__container">
      <ProjectItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>
