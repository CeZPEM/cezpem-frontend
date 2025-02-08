import Link from "next/link";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav className={`flex space-x-6 text-sm md:text-base ${className || ""}`}>
      <Link
        href="/"
        className="underline lg:no-underline hover:underline font-bold"
      >
        Home
      </Link>
      <Link
        href="/cursos"
        className="underline lg:no-underline hover:underline"
      >
        Cursos
      </Link>
      <Link
        href="/cursinho"
        className="underline lg:no-underline hover:underline"
      >
        Cursinho
      </Link>
      <Link href="/sobre" className="underline lg:no-underline hover:underline">
        Sobre
      </Link>
    </nav>
  );
}
