type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <h2
      className={`leading-none text-40px font-bold text-black ${
        className ?? ""
      }`}
    >
      {children}
    </h2>
  );
}
