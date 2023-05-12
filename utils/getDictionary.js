const dictionaries = {
  en: () => import("../Languages/en.json").then((module) => module.default),
  pt: () => import("../Languages/pt.json").then((module) => module.default),
};

export default async function getDictionary(lang) {
  return dictionaries[lang](); // run the function for the given language
}
