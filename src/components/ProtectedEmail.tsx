"use client";

import { useState, useEffect } from "react";

type ProtectedEmailProps = {
  email: string;
};

export function ProtectedEmail({ email }: ProtectedEmailProps) {
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmail(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return email && showEmail ? (
    <a href={`mailto:${email}`}>{email}</a>
  ) : (
    <span>...</span>
  );
}
