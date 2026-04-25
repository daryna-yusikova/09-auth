'use client';

import { useEffect } from 'react';
import { getMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const setUser = useAuthStore(state => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMe();
        console.log('USER:', user);

        setUser(user); // ⬅️ БЕЗ if
      } catch (error) {
        console.log('ERROR:', error);
        clearIsAuthenticated();
      }
    };

    fetchUser();
  }, []);

  return <>{children}</>;
}
