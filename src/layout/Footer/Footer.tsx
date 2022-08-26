import logoFooter from 'assets/images/logo-footer.svg';
import { LocaleOptions } from 'components';
import Image from 'next/future/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              LinkedIn
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              Crunchbase
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              Hackernews
            </a>
          </li>
        </ul>
      </section>
      <LocaleOptions />
      <section className={styles.section}>
        <Image src={logoFooter} alt="Logo Batatabit 2021" />
      </section>
    </footer>
  );
};

export default Footer;
