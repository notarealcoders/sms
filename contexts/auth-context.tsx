'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { User, AuthState } from '@/lib/types/auth';
import { authenticate } from '@/lib/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setState(prev => ({
        ...prev,
        user: JSON.parse(savedUser),
        isLoading: false,
      }));
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      const user = await authenticate(email, password);
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setState(prev => ({ ...prev, user, isLoading: false }));
        router.push(`/dashboard/${user.role}`);
      } else {
        setState(prev => ({
          ...prev,
          error: 'Invalid credentials',
          isLoading: false,
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'An error occurred during login',
        isLoading: false,
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setState({ user: null, isLoading: false, error: null });
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}