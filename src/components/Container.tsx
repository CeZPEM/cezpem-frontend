export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container max-w-[1260px] mx-auto px-4 md:px-12 py-8 md:py-12 3xl:px-2 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
