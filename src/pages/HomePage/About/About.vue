<script setup lang="ts">
import './About.scss';

import SectionHeader from '../../../components/SectionHeader/SectionHeader.vue';
</script>

<template>
  <section id="about" class="about">
    <div class="about__container">
      <div>
        <SectionHeader title="Обо мне" subtitle="Кто я" />
        <p class="about__text">
          Привет! Я молодой разработчик, специализирующийся на создании
          мобильных адаптивных пользовательских интерфейсов. Хотя мой опыт
          веб-разработки начался с HTML, CSS и JavaScript, а также использования
          Vue, я готов быстро осваивать новые технологические стеки, поскольку
          верю, что не существует единственного правильного способа решения
          задачи. Для меня важно выбирать лучшие инструменты для работы над
          проектами.
        </p>
        <RouterLink
          :to="{ name: 'Home', hash: '#projects' }"
          class="about__link"
        >
          Просмотрите некоторые из моих последних проектов.
        </RouterLink>
      </div>
      <div class="about__image-wrapper">
        <img
          src="../../../images/about.jpg"
          alt="Фото ноутбука"
          class="about__image"
        />
      </div>
    </div>
  </section>
</template>
