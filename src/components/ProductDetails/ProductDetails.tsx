import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import batata from '../../assets/icons/batata.svg';
import checkCircle from '../../assets/icons/check-circle.svg';
import clock from '../../assets/icons/clock.svg';
import dollarSign from '../../assets/icons/dollar-sign.svg';
import eye from '../../assets/icons/eye.svg';
import styles from './ProductDetails.module.css';

const ProductDetails = () => {
  const { t } = useTranslation('productDetails');

  return (
    <section className={styles.section}>
      <span className={styles.logo}>
        <Image src={batata} alt="" />
      </span>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subTitle')}</p>
      </div>
      <section className={styles.cardsContainer}>
        <article className={styles.card}>
          <Image
            src={clock}
            alt=""
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>{t('details.0.name')}</h3>
          <p className={styles.cardBody}>{t('details.0.description')}</p>
        </article>
        <article className={styles.card}>
          <Image
            src={eye}
            alt=""
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>{t('details.1.name')}</h3>
          <p className={styles.cardBody}>{t('details.1.description')}</p>
        </article>
        <article className={styles.card}>
          <Image
            src={dollarSign}
            alt=""
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>{t('details.2.name')}</h3>
          <p className={styles.cardBody}>{t('details.2.description')}</p>
        </article>
        <article className={styles.card}>
          <Image
            src={checkCircle}
            alt=""
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <h3 className={styles.cardTitle}>{t('details.3.name')}</h3>
          <p className={styles.cardBody}>{t('details.3.description')}</p>
        </article>
      </section>
    </section>
  );
};

export default ProductDetails;
