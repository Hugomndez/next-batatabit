import downArrow from '../../assets/icons/down-arrow.svg';
import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href='/' className={styles.logo}>
        <img
          src={logo}
          alt='Batatabit logo'
          width='150'
          height='24'
          fetchpriority='high'
          decoding='sync'
          loading='eager'
        />
      </a>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          La próxima revolución en el intercambio de criptomonedas.
        </h1>
        <p className={styles.subtitle}>
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
        <a href='#plans' className={styles.button}>
          <p>Conoce Nuestros Planes</p>
          <img
            className={styles.buttonIcon}
            src={downArrow}
            alt=''
            width='13'
            height='8'
            fetchpriority='high'
            decoding='sync'
            loading='eager'
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
