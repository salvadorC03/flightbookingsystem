import { useState } from "react";

export function useLoading() {
  const [message, setMessage] = useState<JSX.Element | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const cleanup = () => {
    if (!message) return;

    const timeout = setTimeout(() => setMessage(null), 3000);

    return () => clearTimeout(timeout);
  };

  return { message, setMessage, isLoading, setIsLoading, cleanup };
}
