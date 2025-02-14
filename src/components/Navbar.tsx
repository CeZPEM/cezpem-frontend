import Link from "next/link";

export default function Navbar({ className = "" }: { className?: string }) {
  return (
    <nav
      className={`flex flex-1 gap-y-3 gap-6 flex-wrap justify-center md:justify-between md:text-base ${
        className || ""
      }`}
    >
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
        Cursinho Popular
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
