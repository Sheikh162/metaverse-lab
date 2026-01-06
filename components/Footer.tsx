export default function Footer() {
  return (
    <footer className="border-t py-6 mt-auto">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground md:px-8">
        <p>
          &copy; {new Date().getFullYear()} NetVerse Inc. Built for the Future of Education.
        </p>
      </div>
    </footer>
  );
}