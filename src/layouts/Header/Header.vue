<script setup lang="ts">
import './Header.scss';
import resume from '../../images/resume.pdf';

import { headerLinks } from '../../utils/constants';

const menuActive = ref(false);
const menu = ref<Element | null>(null);

const handleToggleMenu = () => (menuActive.value = !menuActive.value);

const handleCloseMenu = () => {
  if (menuActive.value) {
    menuActive.value = false;
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (event.target === menu.value) {
    handleCloseMenu();
  }
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    handleCloseMenu();
  }
};

const addEventListener = () => {
  document.addEventListener('click', handleClickOutside);

  window.addEventListener('resize', handleResize);
};

const removeEventListener = () => {
  document.removeEventListener('click', handleClickOutside);

  window.removeEventListener('resize', handleResize);
};

onMounted(addEventListener);

onUnmounted(removeEventListener);

watch(menuActive, () => {
  document.body.style.overflowY = menuActive.value ? 'hidden' : 'auto';
});
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="header__logo-link">
      <img src="/logo.svg" alt="Лого сайта" class="header__logo" />
    </RouterLink>
    <nav
      ref="menu"
      :class="['header__menu', { header__menu_active: menuActive }]"
    >
      <ul class="header__links">
        <li v-for="link in headerLinks" :key="link.id">
          <RouterLink
            :to="{ name: 'Home', hash: link.href ? link.href : '' }"
            @click="handleCloseMenu"
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
    <button
      type="button"
      aria-label="Активация меню"
      @click="handleToggleMenu"
      :class="['header__icon', { header__icon_active: menuActive }]"
    ></button>
  </header>
</template>
