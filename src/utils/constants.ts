import images from './images';

import resume from '../images/resume.pdf';

import { Project, Skill } from '../models/models';

interface HeaderLink {
  id: number;
  title: string;
  href?: string;
}

interface Social {
  id: number;
  src: string;
  title: string;
  href: string;
}

export const headerLinks: HeaderLink[] = [
  {
    id: 1,
    title: 'Домашняя',
  },
  {
    id: 2,
    title: 'Обо мне',
    href: '#about',
  },
  {
    id: 3,
    title: 'Навыки',
    href: '#skills',
  },
  {
    id: 4,
    title: 'Проекты',
    href: '#projects',
  },
];

export const socialIcons: Social[] = [
  {
    id: 1,
    src: images.github,
    title: 'GitHub',
    href: 'https://github.com/Kararakt',
  },
  {
    id: 2,
    src: images.telegram,
    title: 'Telegram',
    href: 'https://t.me/Kararakt',
  },
  {
    id: 3,
    src: images.mail,
    title: 'Почты',
    href: 'mailto:denis-vlaskin0@yandex.ru',
  },
  {
    id: 4,
    src: images.person,
    title: 'Резюме',
    href: resume,
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    src: images.html,
    title: 'HTML',
  },
  {
    id: 2,
    src: images.js,
    title: 'Javascript',
  },
  {
    id: 3,
    src: images.ts,
    title: 'TypeScript',
  },
  {
    id: 4,
    src: images.css,
    title: 'CSS',
  },
  {
    id: 5,
    src: images.sass,
    title: 'Sass',
  },
  {
    id: 6,
    src: images.vue,
    title: 'Vue',
  },
  {
    id: 7,
    src: images.git,
    title: 'Git',
  },
  {
    id: 8,
    src: images.github,
    title: 'Github',
  },
];

export const projects = reactive<Project[]>([
  {
    id: 1,
    title: 'GSWT',
    mainSkill: 'HTML',
    src: images.project1,
    description:
      'GSWT — ваш идеальный партнёр в выборе уникальных и роскошных подарков для особенных женщин. Каждый наш подарок создан, чтобы наполнить эмоциями и чувствами, делая моменты незабываемыми. Наслаждайтесь удобством и элегантностью адаптированного сайта.',
    skills: ['HTML', 'JS', 'CSS'],
    githubURL: 'https://github.com/Kararakt/GSWT',
    demoURL: 'https://kararakt.github.io/GSWT/',
  },
  {
    id: 2,
    title: 'vue-mesto-auth',
    mainSkill: 'Vue',
    src: images.project5,
    description:
      'Добро пожаловать в Vue Mesto Auth — усовершенствованную версию Mesto с авторизацией и управлением данными через Vuex! Добавляйте карточки с фотографиями, редактируйте профиль и ставьте лайки, наслаждаясь безопасностью и эффективностью работы. Откройте для себя новые возможности обмена впечатлениями с удобной авторизацией и надежным управлением данными.',
    skills: ['Vue 3', 'Vuex', 'TS', 'HTML', 'SCSS', 'Vite'],
    githubURL: 'https://github.com/Kararakt/vue-mesto-auth',
    demoURL: 'https://vue-mesto-auth.vercel.app',
  },
  {
    id: 3,
    title: 'russian-travel',
    mainSkill: 'HTML',
    src: images.project2,
    description:
      'Добро пожаловать в мир увлекательных путешествий по России! Исследуйте уникальные достопримечательности и погружайтесь в богатое культурное наследие этой удивительной страны. Откройте для себя настоящую Россию с виртуальным туром!',
    skills: ['HTML', 'CSS'],
    githubURL: 'https://github.com/Kararakt/russian-travel',
    demoURL: 'https://kararakt.github.io/russian-travel/',
  },
  {
    id: 4,
    title: 'vue-fake-store',
    mainSkill: 'Vue',
    src: images.project4,
    description:
      'Добро пожаловать в Fake Store — ваш идеальный онлайн-магазин! Просматривайте товары с подробными описаниями, добавляйте их в корзину и избранное, легко управляя покупками. Быстро и удобно оформляйте заказы с прозрачным просмотром общей стоимости.',
    skills: ['Vue 3', 'HTML', 'SCSS', 'TS', 'Fake Store API', 'Vite'],
    githubURL: 'https://vue-fake-store.vercel.app',
    demoURL: 'https://github.com/Kararakt/vue-fake-store',
  },
  {
    id: 5,
    title: 'mesto',
    mainSkill: 'JS',
    src: images.project3,
    description:
      'Добро пожаловать в Mesto — социальную платформу для обмена впечатлениями! Добавляйте карточки с фотографиями, редактируйте свой профиль и ставьте лайки понравившимся публикациям. Наслаждайтесь удобным интерфейсом и делитесь лучшими моментами с друзьями!',
    skills: ['HTML', 'CSS', 'JS', 'Webpack'],
    githubURL: 'https://github.com/Kararakt/mesto',
    demoURL: 'https://kararakt.github.io/mesto/',
  },
  {
    id: 6,
    title: 'vue-quiz-game',
    mainSkill: 'Vue',
    src: images.project6,
    description:
      'Добро пожаловать в Vue Quiz Game — увлекательную игру-викторину! Отвечайте на вопросы из множества категорий на ваш выбор, результаты сохраняются в localStorage, чтобы отслеживать прогресс. Для начала новой викторины просто нажмите кнопку "Закончить квиз" и начните игру заново.',
    skills: ['Vue 3', 'HTML', 'SCSS', 'TS', 'Vite'],
    githubURL: 'https://github.com/Kararakt/russian-travel',
    demoURL: 'https://kararakt.github.io/russian-travel/',
  },
]);
