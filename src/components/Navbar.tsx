import Link from "next/link";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex gap-6 md:text-base ${className || ""}`}>
      <Link
        href="/"
        className="underline text-24px lg:no-underline hover:underline font-bold"
      >
        Home
      </Link>
      <Link
        href="/cursos"
        className="underline text-24px lg:no-underline hover:underline"
      >
        Cursos
      </Link>
      <Link
        href="/cursinho"
        className="underline text-24px lg:no-underline hover:underline"
      >
        Cursinho popular
      </Link>
      <Link
        href="/sobre"
        className="underline text-24px lg:no-underline hover:underline"
      >
        Sobre
      </Link>
    </nav>
  );
}
