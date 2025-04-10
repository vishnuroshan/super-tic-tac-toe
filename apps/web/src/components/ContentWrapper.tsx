export function ContentWrapper({ children }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">{children}</div>
    </div>
  );
}
