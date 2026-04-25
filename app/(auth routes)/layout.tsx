'use client';

import { useAuthStore } from '@/lib/store/authStore';
import Loader from '@/components/Loader/Loader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const clearIsAuthenticated = useAuthStore(
    state => state.clearIsAuthenticated
  );

  useEffect(() => {
    clearIsAuthenticated();
    setLoading(false);
    router.refresh();
  }, [clearIsAuthenticated, router]);
  return loading ? <Loader fullscreen label="Preparing sign-in..." /> : children;
}
