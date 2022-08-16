import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import orangeRightArrow from '../../assets/icons/orange-right-arrow.svg';
import styles from './Plans.module.css';

const Plans = () => {
  const { t } = useTranslation('plans');

  return (
    <section id="plans" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subTitle')}</p>
      </div>
      <section className={styles.sliderContainer}>
        <article className={styles.cardContainer}>
          <div>
            <h3 className={styles.cardTitle}>{t('plans.0.payment')}</h3>
            <p className={styles.cardPrice}>
              <span>$</span> {t('plans.0.price')}
            </p>
            <p className={styles.cardSaving}>* {t('plans.0.description')}</p>
            <button className={styles.cardCta}>
              {t('plans.0.callToAction')}
              <Image
                src={orangeRightArrow}
                alt=""
                width={20}
                height={20}
                className={styles.cardCtaIcon}
              />
            </button>
          </div>
        </article>
        <article className={styles.cardContainer}>
          <p className={styles.recommended}>{t('recommended')}</p>
          <div>
            <h3 className={styles.cardTitle}>{t('plans.1.payment')}</h3>
            <p className={styles.cardPrice}>
              <span>$</span> {t('plans.1.price')}
            </p>
            <p className={styles.cardSaving}>* {t('plans.1.description')}</p>
            <button className={styles.cardCta}>
              {t('plans.1.callToAction')}
              <Image
                src={orangeRightArrow}
                alt=""
                width={20}
                height={20}
                className={styles.cardCtaIcon}
              />
            </button>
          </div>
        </article>
        <article className={styles.cardContainer}>
          <div>
            <h3 className={styles.cardTitle}>{t('plans.2.payment')}</h3>
            <p className={styles.cardPrice}>
              <span>$</span> {t('plans.2.price')}
            </p>
            <p className={styles.cardSaving}>* {t('plans.2.description')}</p>
            <button className={styles.cardCta}>
              {t('plans.2.callToAction')}
              <Image
                src={orangeRightArrow}
                alt=""
                width={20}
                height={20}
                className={styles.cardCtaIcon}
              />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Plans;
