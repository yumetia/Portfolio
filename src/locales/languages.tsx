
import en from "@locales/en/en";
import fr from "@locales/fr/fr";

export type Locale = "en" | "fr";

/**
 * Helper: read `field_en` / `field_fr` from an object.
 * Fallback order: field_<locale> -> field_en -> field (if we keep a non-localized field)
*/
export function getLocalized<T = string>(
  obj: Record<string, any>,
  field: string,
  locale: Locale
): T {
  const key = `${field}_${locale}`;
  if (key in obj) return obj[key] as T;

  const fallbackEn = `${field}_en`;
  if (fallbackEn in obj) return obj[fallbackEn] as T;

  return obj[field] as T;
}



const languages = {
  en,
  fr
} as const;

export default languages;
