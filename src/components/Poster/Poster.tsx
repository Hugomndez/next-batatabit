import bitcoinBaby2x from 'assets/images/bitcoinbaby2x.jpg';
import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import styles from './Poster.module.css';

const Poster = () => {
  const { t } = useTranslation('poster');
  return (
    <section className={styles.container}>
      <Image src={bitcoinBaby2x} alt="" className={styles.image} />
      <h2 className={styles.title}>{t('title')}</h2>
    </section>
  );
};

export default Poster;
