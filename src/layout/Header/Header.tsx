import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import Link from 'next/link';
import downArrow from '../../assets/icons/down-arrow.svg';
import logo from '../../assets/images/logo.svg';
import { LoginLogout } from '../../components';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation('header');
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image src={logo} alt='Batatabit logo' priority />
        </a>
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subTitle')}</p>
        <LoginLogout />
        <a href='#plans' className={styles.button}>
          <p>{t('callToAction')}</p>
          <Image src={downArrow} alt='' className={styles.icon} priority />
        </a>
      </div>
    </header>
  );
};

export default Header;
