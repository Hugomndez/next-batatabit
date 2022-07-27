import bitcoinBaby2x from '../../assets/images/bitcoinbaby2x.jpg';
import styles from './Poster.module.css';

const Poster = () => {
  return (
    <section className={styles.container}>
      <img
        className={styles.image}
        src={bitcoinBaby2x}
        alt=''
        fetchpriority='low'
        decoding='async'
        loading='lazy'
      />
      <h2 className={styles.title}>Conócelo hoy</h2>
    </section>
  );
};

export default Poster;
