"use client";

import { useState, useEffect } from "react";

type ObfuscatedEmailProps = {
  reversedEmail: string;
};

export function ObfuscatedEmail({ reversedEmail }: ObfuscatedEmailProps) {
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmail(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const email = reversedEmail?.split("")?.reverse()?.join("");
  return email && showEmail ? (
    <a href={`mailto:${email}`}>{email}</a>
  ) : (
    <span>...</span>
  );
}
