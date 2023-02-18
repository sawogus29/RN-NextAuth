import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function Naver() {
  useEffect(() => {
    signIn('naver', { callbackUrl: '/api/extract-token' });
  }, []);

  return <h1>This page immediately redirected to Naver</h1>;
}
