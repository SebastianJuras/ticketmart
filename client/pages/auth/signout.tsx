import { useEffect } from 'react';
import { useRequest } from '../../@/hooks/useRequest';
import Router from 'next/router';

const SignOut = () => {
  const { doRequest, loading, error } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    onSuccess: () => Router.push('/'),
    onError: (err) => console.error("Sign out failed", err),
  });

  useEffect(() => {
    const signOut = async () => {
      await doRequest();
    };

    signOut();
  }, []);

  return (
    <div>
      <h1>Signing you out</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error signing out: {error.message}</p>}
    </div>
  );
};

export default SignOut;
