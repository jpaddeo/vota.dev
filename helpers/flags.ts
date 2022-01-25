export const getFlagLocale = (locale: string) => {
  const flagsEmojis: any = {
    es: '🇪🇸 ',
    en: '🇺🇸/🇬🇧',
  }
  return flagsEmojis[locale] || ''
}
