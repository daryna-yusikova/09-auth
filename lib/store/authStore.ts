import { User } from '@/types/user';
import { create } from 'zustand';

interface AuthStore {
    user: null | User;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    clearIsAuthenticated: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthenticated: false,
    setUser: (user: User) => set(() => ({ user: user, isAuthenticated: !!user})),
  clearIsAuthenticated: ()=>set(()=>({user: null, isAuthenticated: false}))
}))
