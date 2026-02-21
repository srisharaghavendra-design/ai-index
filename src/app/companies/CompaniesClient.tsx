"use client";

import { useMemo, useState } from "react";

type Company = {
  slug: string;
  name: string;
  tagline?: string;
  tags?: string[];
};

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function CompaniesClient({ companies }: { companies: Company[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = normalize(q);
    if (!query) return companies;

    return companies.filter((c) => {
      const hay = normalize(
        [c.name, c.tagline ?? "", (c.tags ?? []).join(" ")].join(" ")
      );
      return hay.includes(query);
    });
  }, [companies, q]);

  return (
    <div className="space-y-6">
      {/* Top row: title + search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Companies</h1>
          <p className="mt-2 text-gray-700">
            Top 20 starter list. Next we’ll make each page richer (products,
            pricing, launches, people, socials).
          </p>
        </div>

        <div className="w-full sm:w-[360px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search companies…"
            className="w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-2"
          />
          <div className="mt-2 text-xs text-gray-500">
            Showing <span className="font-medium">{filtered.length}</span> of{" "}
            <span className="font-medium">{companies.length}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border p-10 text-center">
          <div className="text-lg font-medium">No matches</div>
          <p className="mt-1 text-sm text-gray-600">
            Try searching “LLM”, “API”, “open-weight”, etc.
          </p>
          <button
            onClick={() => setQ("")}
            className="mt-4 rounded-full border px-4 py-2 text-sm hover:bg-gray-50"
          >
            Clear search
          </button>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <li key={c.slug} className="rounded-2xl border p-8">
              <div className="text-2xl font-semibold">{c.name}</div>

              {c.tagline ? (
                <div className="mt-2 text-gray-700">{c.tagline}</div>
              ) : null}

              {/* Replace tag pills with Products / News / Launches */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium">
                <a
                  href={`/companies/${c.slug}?view=products`}
                  className="hover:underline"
                >
                  Products
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href={`/companies/${c.slug}?view=news`}
                  className="hover:underline"
                >
                  News
                </a>
                <span className="text-gray-300">•</span>
                <a
                  href={`/companies/${c.slug}?view=launches`}
                  className="hover:underline"
                >
                  Launches
                </a>
              </div>

              {/* View details */}
              <a
                href={`/companies/${c.slug}`}
                className="mt-6 inline-block text-gray-500 hover:underline"
              >
                View details →
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}