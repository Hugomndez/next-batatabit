import { signIn, signOut, useSession } from 'next-auth/react';

const LoginLogout = () => {
  const { data: session, status } = useSession(); // Obteniendo status
  const loading = status === 'loading';

  if (loading) return null; // if loading don't show anything

  if (!session) {
    return <button onClick={() => signIn()}>Sign In</button>;
  }

  return (
    <>
      <span>{session.user?.name}</span>
      <button onClick={() => signOut()}>Log Out</button>
    </>
  );
};

export default LoginLogout;
