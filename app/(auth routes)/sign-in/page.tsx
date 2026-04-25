'use client';
import { login, userData } from '@/lib/api/clientApi';
import css from './SignInPage.module.css';
import { useState } from 'react';
import { useAuthStore } from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';

export default function SighInPage() {
  const [error, setError] = useState('');
  const setUser = useAuthStore(state => state.setUser);
  const router = useRouter();
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      const res = await login({ email, password });
      if (res) {
        setUser(res);
        router.replace('/profile');
      }
    } catch {
      setError('invalid email or password');
    }
  };

  return (
    <main className={css.mainContent}>
      <form className={css.form} action={handleSubmit}>
        <h1 className={css.formTitle}>Sign in</h1>

        <div className={css.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>

        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>

        <p className={css.error}>{error}</p>
      </form>
    </main>
  );
}
