import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import styles from './LoginLogout.module.css';

const LoginLogout = () => {
  const { data: session, status } = useSession(); // Obteniendo status
  const loading = status === 'loading';
  const { t } = useTranslation('common');

  if (loading) return null; // if loading don't show anything

  if (!session) {
    return (
      <button className={styles.button} onClick={() => signIn()}>
        {t('signIn')}
      </button>
    );
  }

  return (
    <>
      <span className={styles.username}>{session.user?.name}</span>
      <button className={styles.button} onClick={() => signOut()}>
        {t('signOut')}
      </button>
    </>
  );
};

export default LoginLogout;
