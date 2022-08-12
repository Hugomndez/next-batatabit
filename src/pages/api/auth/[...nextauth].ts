import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';

const options: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
  },
  debug: true,
  session: {},
  jwt: {},
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        password: {
          type: 'password',
          label: 'Password:',
          placeholder: '**************',
        },
      },
      async authorize(credentials) {
        // Conectar API
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PROTOCOL}${process.env.NEXT_PUBLIC_VERCEL_URL}/api/auth/batatabit`,
          {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-type': 'application/json' },
          }
        );

        // Json rta API
        const user = await response.json();

        // return user ?? null
        if (response.ok && user) {
          return user;
        }

        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
};

export default NextAuth(options);
