import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-10 space-y-6">
      <h1 className="text-3xl font-semibold">AI Index</h1>
      <p className="opacity-80">
        Public directory of AI companies, products, launches and pricing.
      </p>

      <Link className="underline" href="/companies">
        Go to Companies →
      </Link>
    </main>
  );
}