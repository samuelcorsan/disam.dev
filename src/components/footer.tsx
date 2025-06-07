export default function Footer() {
  return (
    <footer className="pt-8">
      <hr className="h-px border-0 bg-foreground/20" />
      <div className="mx-1 flex items-center justify-between pt-4 md:mx-3">
        <span className="text-xs text-foreground">
          © {new Date().getFullYear()} Samuel Corsan
        </span>
      </div>
    </footer>
  );
}
