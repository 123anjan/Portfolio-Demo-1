export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tag: string;
};

export type Technology = {
  name: string;
  category: string;
  description: string;
  useCases: string[];
};

export type Industry = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Demo = {
  id: string;
  title: string;
  description: string;
  category: string;
  metrics: string[];
};
