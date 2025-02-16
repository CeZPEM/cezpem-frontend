type PageProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Page({ children, className }: PageProps) {
  return (
    <div
      className={`flex flex-col items-center min-h-screen ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
