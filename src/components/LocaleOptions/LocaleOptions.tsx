import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const LocaleOptions = () => {
  const { locale, locales } = useRouter();
  const { t } = useTranslation('common');

  // Locales aren't configured
  if (locale == undefined || locales == undefined) return null;

  return (
    <>
      <p>{t('language')}:</p>
      {locales.map(loc => (
        <form action='/api/language' method='POST' key={loc}>
          <input type='hidden' name='preferredLocale' value={loc} />
          <button type='submit'>{loc}</button>
        </form>
      ))}
    </>
  );
};

export default LocaleOptions;
