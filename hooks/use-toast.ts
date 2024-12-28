'use client';

import { toast as showToast } from '@/components/ui/toast';

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

export function useToast() {
  return {
    toast: (props: ToastProps) => {
      showToast(props);
    },
  };
}