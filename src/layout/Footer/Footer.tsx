import logoFooter from '../../assets/images/logo-footer.svg';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href='#'>
              LinkedIn
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href='#'>
              Crunchbase
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href='#'>
              Hackernews
            </a>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <img
          src={logoFooter}
          alt='Logo de Batatabit 2021'
          width='64'
          height='50'
          fetchpriority='low'
          decoding='async'
          loading='lazy'
        />
      </section>
    </footer>
  );
};

export default Footer;
