type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h2
      className={`w-full leading-tight mx-auto max-w-64 md:max-w-none text-32px md:text-48px ${
        className || ""
      }`.trim()}
    >
      {children}
    </h2>
  );
}
