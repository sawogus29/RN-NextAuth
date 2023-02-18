import { getToken } from 'next-auth/jwt';

export default async function handler(req, res) {
  const tokenPayload = await getToken({ req });
  if (!tokenPayload) {
    return res.status(401).end();
  }

  res.status(200).json({ name: 'protected' });
}
