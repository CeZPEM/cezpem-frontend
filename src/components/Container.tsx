export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[1600px] mx-auto px-12 2xl:px-2 py-6 md:py-12 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
