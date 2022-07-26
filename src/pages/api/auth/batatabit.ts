import type { NextApiHandler } from 'next';

type User = {
  name: string;
  email: string;
};

const credentialsAuth: NextApiHandler<User> = (request, response) => {
  if (request.method !== 'POST') {
    response.status(405).end();

    return;
  }

  if (request.body.password === process.env.AUTH_BATATABIT_SECRET) {
    const batatabitUser: User = {
      name: 'Batatabit User',
      email: 'test@batatabit.com',
    };

    return response.status(200).json(batatabitUser);
  }

  response.status(401).end();
};

export default credentialsAuth;
