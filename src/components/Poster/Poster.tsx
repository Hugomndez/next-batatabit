import Image from 'next/future/image';
import bitcoinBaby2x from '../../assets/images/bitcoinbaby2x.jpg';
import styles from './Poster.module.css';

const Poster = () => {
  return (
    <section className={styles.container}>
      <Image src={bitcoinBaby2x} alt='' className={styles.image} />
      <h2 className={styles.title}>Conócelo hoy</h2>
    </section>
  );
};

export default Poster;
