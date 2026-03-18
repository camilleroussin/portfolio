import { useLanguage } from "./LanguageContext";
import { strings } from "./strings";

export const useT = () => {
  const { lang } = useLanguage();
  return strings[lang];
};