<script setup lang="ts">
import './SkillBlock.scss';

import { Skill } from '../../models/models';

defineProps<{ skill: Skill }>();
</script>

<template>
  <li class="skill-block">
    <img
      :src="skill.src"
      :alt="`Лого ${skill.title}`"
      class="skill-block__image"
    />
    <h3 class="skill-block__title">{{ skill.title }}</h3>
  </li>
</template>
