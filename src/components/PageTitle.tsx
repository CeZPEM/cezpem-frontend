type PageTitleProps = {
  children: React.ReactNode;
  text?: string;
  className?: string;
};

export function PageTitle({ children, text="text-black", className = "" }: PageTitleProps) {
  return (
    <h2
      className={`leading-none text-32px md:text-40px font-bold ${text} ${
        className ?? ""
      }`}
    >
      {children}
    </h2>
  );
}
