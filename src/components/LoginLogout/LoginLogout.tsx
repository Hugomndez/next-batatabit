import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './LoginLogout.module.css';

const LoginLogout = () => {
  const { data: session, status } = useSession(); // Obteniendo status
  const loading = status === 'loading';

  if (loading) return null; // if loading don't show anything

  if (!session) {
    return (
      <button className={styles.button} onClick={() => signIn()}>
        Sign In
      </button>
    );
  }

  return (
    <>
      <span className={styles.username}>{session.user?.name}</span>
      <button className={styles.button} onClick={() => signOut()}>
        Log Out
      </button>
    </>
  );
};

export default LoginLogout;
