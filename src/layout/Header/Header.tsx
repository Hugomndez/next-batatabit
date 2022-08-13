import Image from 'next/future/image';
import Link from 'next/link';
import downArrow from '../../assets/icons/down-arrow.svg';
import logo from '../../assets/images/logo.svg';
import { LoginLogout } from '../../components';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>
          <Image src={logo} alt='Batatabit logo' priority />
        </a>
      </Link>
      <div className={styles.container}>
        <h1 className={styles.title}>
          La próxima revolución en el intercambio de criptomonedas.
        </h1>
        <p className={styles.subtitle}>
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
        <LoginLogout />
        <a href='#plans' className={styles.button}>
          <p>Conoce Nuestros Planes</p>
          <Image src={downArrow} alt='' className={styles.icon} priority />
        </a>
      </div>
    </header>
  );
};

export default Header;
