"use client";

import { useState, useEffect } from "react";

type ProtectedEmailProps = {
  email: string;
  className?: string;
};

export function ProtectedEmail({ email, className }: ProtectedEmailProps) {
  const [decodedEmail, setDecodedEmail] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const decoded = atob(email);
        setDecodedEmail(decoded);
      } catch (error) {
        console.error("Erro ao decodificar o email:", error);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [email]);

  return decodedEmail ? (
    <a className={className} href={`mailto:${decodedEmail}`}>
      {decodedEmail}
    </a>
  ) : (
    <span>...</span>
  );
}
