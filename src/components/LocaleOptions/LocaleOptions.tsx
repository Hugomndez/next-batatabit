import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './LocaleOptions.module.css';

const LocaleOptions = () => {
  const { locale, locales, asPath } = useRouter();
  const { t } = useTranslation('common');

  // Locales aren't configured
  if (locale == undefined || locales == undefined) return null;

  return (
    <section className={styles.section}>
      <p className={styles.title}>{t('language')} :</p>
      {/* Use this code when you want to let user override browser language preference  */}
      {/* {locales.map(loc => (
        <form action='/api/language' method='POST' key={loc}>
          <input type='hidden' name='preferredLocale' value={loc} />
          <button type='submit'>{loc}</button>
        </form>
      ))} */}
      {locales.map((loc, index) => {
        return (
          <div key={index}>
            <Link href={asPath} locale={loc}>
              <a className={loc === locale ? styles.active : ''}>{loc}</a>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default LocaleOptions;
