export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`w-full bg-background text-foreground p-0 my-0 mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
