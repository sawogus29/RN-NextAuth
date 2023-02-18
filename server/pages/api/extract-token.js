import { getToken } from 'next-auth/jwt';
import { parse } from 'cookie';

export default async (req, res) => {
  const tokenPayload = await getToken({ req });
  if (!tokenPayload) {
    res.status(401).end();
  }
  const cookie = parse(req.headers.cookie ?? '');
  const token = cookie['next-auth.session-token'];
  console.log(token);
  // res.status(200).json({ token, text: 'Hello', tokenPayload });
  return res.redirect(
    `${process.env.MOBILE_APP_URL}/redirect?${new URLSearchParams({ token })}}`
  );
};
