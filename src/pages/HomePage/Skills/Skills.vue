<script setup lang="ts">
import './Skills.scss';

import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';
import SkillBlock from '../../../components/SkillBlock/SkillBlock.vue';

import { skills } from '../../../utils/constants';
</script>

<template>
  <section id="skills" class="skills">
    <SectionHeader title="Навыки" subtitle="Чем я владею" />
    <ul class="skills__all-skills">
      <SkillBlock v-for="skill in skills" :key="skill.id" :skill="skill" />
    </ul>
  </section>
</template>
