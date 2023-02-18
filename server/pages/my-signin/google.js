import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function Google() {
  useEffect(() => {
    signIn('google', { callbackUrl: '/Goal' });
  }, []);
  return <h1>This page immidiately gets redirected to Google signin page</h1>;
}
