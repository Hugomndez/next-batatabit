import orangeRightArrow from '../../assets/icons/orange-right-arrow.svg';
import styles from './Plans.module.css';

const Plans = () => {
  return (
    <section id='plans' className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Escoge el plan que mejor se ajuste a ti.
        </h2>
        <p className={styles.subtitle}>
          Cualquier plan te da acceso completo a nuestra plataforma.
        </p>
      </div>
      <section className={styles.sliderContainer}>
        <article className={styles.cardContainer}>
          <div>
            <h3 className={styles.cardTitle}>Pago mensual</h3>
            <p className={styles.cardPrice}>
              <span>$</span> 19
            </p>
            <p className={styles.cardSaving}>* Acceso limitado.</p>
            <button className={styles.cardCta}>
              Escoger este
              <img
                className={styles.cardCtaIcon}
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
        <article className={styles.cardContainer}>
          <p className={styles.recommended}>Recomendado</p>
          <div>
            <h3 className={styles.cardTitle}>Pago anual</h3>
            <p className={styles.cardPrice}>
              <span>$</span> 99
            </p>
            <p className={styles.cardSaving}>
              * Ahorras $129 comparado al plan mensual.
            </p>
            <button className={styles.cardCta}>
              Escoger este
              <img
                className={styles.cardCtaIcon}
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
        <article className={styles.cardContainer}>
          <div>
            <h3 className={styles.cardTitle}>Pago anual</h3>
            <p className={styles.cardPrice}>
              <span>$</span> 199
            </p>
            <p className={styles.cardSaving}>* Acceso ilimitado.</p>
            <button className={styles.cardCta}>
              Escoger este
              <img
                className={styles.cardCtaIcon}
                src={orangeRightArrow}
                alt=''
                width='20'
                height='20'
                fetchpriority='low'
                decoding='async'
                loading='lazy'
              />
            </button>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Plans;
