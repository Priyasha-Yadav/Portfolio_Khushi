
// src/hooks/use-toast.ts
import { useCallback, useState } from "react";

export interface ToastData {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function useToastProvider() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const toast = useCallback((toast: Omit<ToastData, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, ...toast }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000); // auto-close after 4s
  }, []);

  return { toasts, toast };
}
