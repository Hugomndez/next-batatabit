import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

const options: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
  },
  debug: process.env.NODE_ENV !== 'production',
  session: {},
  jwt: {},
  providers: [
    process.env.VERCEL_ENV === 'preview'
      ? CredentialsProvider({
          name: 'Credentials',
          credentials: {
            password: {
              type: 'password',
              label: 'Password:',
              placeholder: '**************',
            },
          },
          async authorize(credentials) {
            const response = await fetch(
              `${process.env.NEXTAUTH_URL}/api/auth/batatabit`,
              {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { 'Content-type': 'application/json' },
              }
            );

            const user = await response.json();

            if (response.ok && user) {
              return user;
            }

            return null;
          },
        })
      : GitHubProvider({
          clientId: process.env.AUTH_GITHUB_ID as string,
          clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
  ],
};

export default NextAuth(options);
