'use client';

import { useEffect, useState } from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handleToast = (event: CustomEvent<Toast>) => {
      setToasts((current) => [...current, event.detail]);
      setTimeout(() => {
        setToasts((current) =>
          current.filter((toast) => toast.id !== event.detail.id)
        );
      }, 3000);
    };

    document.addEventListener('toast' as any, handleToast as any);
    return () => document.removeEventListener('toast' as any, handleToast as any);
  }, []);

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, variant }) => (
        <Toast key={id} variant={variant}>
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}