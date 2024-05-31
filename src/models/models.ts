export interface Skill {
  id: number;
  src: string;
  title: string;
}

export interface Project {
  id: number;
  title: string;
  mainSkill: string;
  src: string;
  description: string;
  skills: string[];
  githubURL: string;
  demoURL: string;
}
