import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          ai-index
        </Link>
           </div>
    </header>
  );
}