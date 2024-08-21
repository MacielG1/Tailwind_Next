export type Dictionary = {
  Navbar: {
    Home: string;
    Examples: string;
    Projects: string;
  };
  MainSection: {
    h1: {
      span1: string;
      span2: string;
    };
    P: string;
  };
  Features: {
    h2: string;
    P: string;
    nextDescription: string;
    TailwindDescription: string;
    reactDescription: string;
  };
  BlogSection: {
    h3: string;
    description: string;
    tailwind: {
      text: string;
      btnText: string;
    };
    next: {
      text: string;
      btnText: string;
    };
  };
  Footer: {
    text: string;
  };
  Examples: {
    title: string;
  };
};

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('../Languages/en.json').then((module) => module.default),
  pt: () => import('../Languages/pt.json').then((module) => module.default),
};

export default async function getDictionary(lang: keyof typeof dictionaries): Promise<Dictionary> {
  return dictionaries[lang](); // Run the function for the given language
}
