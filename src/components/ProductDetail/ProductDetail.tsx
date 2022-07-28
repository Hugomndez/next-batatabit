import Image from 'next/future/image';
import batata from '../../assets/icons/batata.svg';
import checkCircle from '../../assets/icons/check-circle.svg';
import clock from '../../assets/icons/clock.svg';
import dollarSign from '../../assets/icons/dollar-sign.svg';
import eye from '../../assets/icons/eye.svg';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  return (
    <section className={styles.section}>
      <span className={styles.logo}>
        <Image src={batata} alt='' />
      </span>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Creamos un producto sin comparación.</h2>
        <p className={styles.subtitle}>
          Confiable y diseñado para su uso diario.
        </p>
      </div>
      <section className={styles.cardsContainer}>
        <article className={styles.card}>
          <Image
            src={clock}
            alt=''
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <p className={styles.cardTitle}>Tiempo real</p>
          <p className={styles.cardBody}>
            Nuestra API toma información minuto a minuto sobre las tasas que más
            determinan el comportamiento.
          </p>
        </article>
        <article className={styles.card}>
          <Image
            src={eye}
            alt=''
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <p className={styles.cardTitle}>No hay tasas escondidas</p>
          <p className={styles.cardBody}>
            Ni en la compra o al momento de exit, Batabit siempre te muestra el
            costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className={styles.card}>
          <Image
            src={dollarSign}
            alt=''
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <p className={styles.cardTitle}>Compara monedas</p>
          <p className={styles.cardBody}>
            Ni en la compra o al momento de exit, Batabit siempre te muestra el
            costo real de lo que estás adquiriendo.
          </p>
        </article>
        <article className={styles.card}>
          <Image
            src={checkCircle}
            alt=''
            width={20}
            height={20}
            className={styles.cardIcon}
          />
          <p className={styles.cardTitle}>Información confiable</p>
          <p className={styles.cardBody}>
            Nuestras fuentes están 100% verificadas y continuamos auditando su
            contenido mientras actualizan.
          </p>
        </article>
      </section>
    </section>
  );
};

export default ProductDetail;
