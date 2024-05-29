<script setup lang="ts">
import './Main.scss';

import { socialIcons } from '../../../utils/constants';
</script>

<template>
  <section class="main">
    <div class="main__container">
      <p class="main__text">Построим что-то вместе</p>
      <h1 class="main__title">
        Привет, я <span class="main__name">Денис</span>
      </h1>
      <h1 class="main__title main__title_space">Фронтенд-разработчик</h1>
      <p class="main__about">
        Я сосредоточен на создании адаптивных интерфейсных веб-приложений,
        интегрирующих серверные технологии.
      </p>
      <div class="main__contacts">
        <a
          v-for="social in socialIcons"
          :key="social.id"
          :href="social.href"
          rel="noreferrer"
          :target="social.title === 'Почты' ? '_self' : '_blank'"
          class="main__social-link"
        >
          <img
            :src="social.src"
            :alt="`Лого ${social.title}`"
            class="main__image"
          />
        </a>
      </div>
    </div>
  </section>
</template>
