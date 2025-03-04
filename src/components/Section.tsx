export default function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full bg-background text-foreground p-0 my-0 mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </section>
  );
}
