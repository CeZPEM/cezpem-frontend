"use client";

import { useState, useEffect } from "react";

type ProtectedEmailProps = {
  email: string;
  className?: string;
};

export function ProtectedEmail({ email, className }: ProtectedEmailProps) {
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmail(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return email && showEmail ? (
    <a className={className || undefined} href={`mailto:${email}`}>
      {email}
    </a>
  ) : (
    <span>...</span>
  );
}
