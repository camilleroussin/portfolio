import { useLanguage } from "./Languagecontext";
import { strings } from "./strings";

export const useT = () => {
  const { lang } = useLanguage();
  return strings[lang];
};