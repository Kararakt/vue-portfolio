<script setup lang="ts">
import './Header.scss';
import resume from '../../images/resume.pdf';

import { headerLinks } from '../../utils/constants';
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__logo-link">
      <img src="/logo.svg" alt="Лого сайта" class="header__logo" />
    </RouterLink>
    <nav>
      <ul class="header__links">
        <li v-for="link in headerLinks" :key="link.id">
          <RouterLink
            :to="{ name: 'Home', hash: link.href ? link.href : '' }"
            class="header__link"
          >
            {{ link.title }}
          </RouterLink>
        </li>
        <li>
          <a :href="resume" target="_blank" class="header__link">Резюме</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
