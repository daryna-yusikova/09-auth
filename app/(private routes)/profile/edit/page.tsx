'use client';
import { useAuthStore } from '@/lib/store/authStore';
import css from './EditProfilePage.module.css';
import { useRouter } from 'next/navigation';
import { updateMe } from '@/lib/api/clientApi';
import { useState } from 'react';

export default function EditPage() {
  const user = useAuthStore(state => state.user);
  const setUser = useAuthStore(state => state.setUser);
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (formData: FormData) => {
    const userName = formData.get('username') as string;
    try {
      if (userName) {
        const updatedUser = await updateMe({ username: userName });
        setUser(updatedUser);
        console.log(updatedUser);
        router.replace('/profile');
      }
    } catch {
      setError('Could not update username');
    }
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <img
          src={user?.avatar}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo} action={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              id="username"
              type="text"
              className={css.input}
              defaultValue={user?.username}
            />
          </div>

          <p>Email: {user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.push('/profile')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
