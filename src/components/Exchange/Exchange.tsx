import { useTranslation } from 'next-i18next';
import Image from 'next/future/image';
import trendingDown from '../../assets/icons/trending-down.svg';
import trendingUp from '../../assets/icons/trending-up.svg';
import bitcoin from '../../assets/images/bitcoin.svg';
import { useDate } from '../../hooks';
import styles from './Exchange.module.css';

const Exchange = () => {
  const { t } = useTranslation('exchange');
  const date = useDate();

  return (
    <section className={styles.section}>
      <Image src={bitcoin} alt="" className={styles.image} priority />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subTitle')}</p>
      </div>
      <section className={styles.tables}>
        <div className={styles.currencyTable}>
          <p className={styles.currencyTableTitle}>{t('coins')}</p>
          <div className={styles.currencyTableContainer}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={`${styles.tableTopLeft} ${styles.tableLeft}`}>
                    Bitcoin
                  </td>
                  <td
                    className={`${styles.tableTopRight} ${styles.tableRight}`}
                  >
                    $ 1.96
                    <Image
                      src={trendingDown}
                      alt=""
                      width={15}
                      height={15}
                      className={styles.trendingDown}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableLeft}>Ethereum</td>
                  <td className={styles.tableRight}>
                    $ 0.07
                    <Image
                      src={trendingUp}
                      alt=""
                      width={15}
                      height={15}
                      className={styles.trendingUp}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableLeft}>Ripple</td>
                  <td className={styles.tableRight}>
                    $ 2.17
                    <Image
                      src={trendingDown}
                      alt=""
                      width={15}
                      height={15}
                      className={styles.trendingDown}
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className={`${styles.tableBottomLeft} ${styles.tableLeft}`}
                  >
                    Stella
                  </td>
                  <td
                    className={`${styles.tableBottomRight} ${styles.tableRight}`}
                  >
                    $ 4.96
                    <Image
                      src={trendingDown}
                      alt=""
                      width={15}
                      height={15}
                      className={styles.trendingDown}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${styles.date} ${styles.currencyDateBg}`}>
            <p>
              <b>{t('updated')}:</b> <span>{date}</span>
            </p>
          </div>
        </div>
        <div className={styles.comisionesTable}>
          <p className={styles.comisionesTableTitle}>{t('commissions')}</p>
          <div className={styles.comisionesTableContainer}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={`${styles.tableTopLeft} ${styles.tableLeft}`}>
                    Bitrade
                  </td>
                  <td
                    className={`${styles.tableTopRight} ${styles.tableRight}`}
                  >
                    $ 12.96
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableLeft}>Bitpreco</td>
                  <td className={styles.tableRight}>$ 13.07</td>
                </tr>
                <tr>
                  <td className={styles.tableLeft}>Novadax</td>
                  <td className={styles.tableRight}>$ 13.15</td>
                </tr>
                <tr>
                  <td
                    className={`${styles.tableBottomLeft} ${styles.tableLeft}`}
                  >
                    Coinext
                  </td>
                  <td
                    className={`${styles.tableBottomRight} ${styles.tableRight}`}
                  >
                    $ 14.96
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${styles.date} ${styles.comisionesDateBg}`}>
            <p>
              <b>{t('updated')}:</b> <span>{date}</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Exchange;
