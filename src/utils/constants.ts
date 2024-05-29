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
    skills: ['HTML', 'JS', 'CSS'],
    githubURL: 'https://github.com/Kararakt/GSWT',
    demoURL: 'https://kararakt.github.io/GSWT/',
  },
  {
    id: 2,
    title: 'vue-mesto-auth',
    mainSkill: 'Vue',
    src: images.project5,
    skills: ['Vue 3', 'Vuex', 'TS', 'HTML', 'SCSS', 'Vite'],
    githubURL: 'https://github.com/Kararakt/vue-mesto-auth',
    demoURL: 'https://vue-mesto-auth.vercel.app',
  },
  {
    id: 3,
    title: 'russian-travel',
    mainSkill: 'HTML',
    src: images.project2,
    skills: ['HTML', 'CSS'],
    githubURL: 'https://github.com/Kararakt/russian-travel',
    demoURL: 'https://kararakt.github.io/russian-travel/',
  },
  {
    id: 4,
    title: 'vue-fake-store',
    mainSkill: 'Vue',
    src: images.project4,
    skills: ['Vue 3', 'HTML', 'SCSS', 'TS', 'Fake Store API', 'Vite'],
    githubURL: 'https://vue-fake-store.vercel.app',
    demoURL: 'https://github.com/Kararakt/vue-fake-store',
  },
  {
    id: 5,
    title: 'mesto',
    mainSkill: 'JS',
    src: images.project3,
    skills: ['HTML', 'CSS', 'JS', 'Webpack'],
    githubURL: 'https://github.com/Kararakt/mesto',
    demoURL: 'https://kararakt.github.io/mesto/',
  },
  {
    id: 6,
    title: 'vue-quiz-game',
    mainSkill: 'Vue',
    src: images.project6,
    skills: ['Vue 3', 'HTML', 'SCSS', 'TS', 'Vite'],
    githubURL: 'https://github.com/Kararakt/russian-travel',
    demoURL: 'https://kararakt.github.io/russian-travel/',
  },
]);
