"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { companies } from "../data/companies";

function normalize(s: string) {
  return s.toLowerCase().trim();
}

export default function CompaniesPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = normalize(q);
    if (!query) return companies;

    return companies.filter((c) => {
      const haystack = normalize(
        [
          c.name,
          c.tagline,
          c.category ?? "",
          c.pricing ?? "",
          c.website ?? "",
          c.hq ?? "",
          c.notes ?? "",
          c.tags.join(" "),
        ].join(" ")
      );
      return haystack.includes(query);
    });
  }, [q]);

  return (
    <main className="mx-auto max-w-6xl p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-semibold">Companies</h1>
          <p className="mt-2 text-sm text-white/60">
            Starter directory. Search by name, category, pricing, or notes.
          </p>
        </div>

        {/* Search */}
        <div className="w-full sm:w-[360px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search companies…"
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
          />
          <div className="mt-2 text-xs text-white/40">
            Showing {filtered.length} of {companies.length}
          </div>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <div className="text-lg font-medium">No matches</div>
          <button
            onClick={() => setQ("")}
            className="mt-4 rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
          >
            Clear search
          </button>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <li
              key={c.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10"
            >
              <div>
                <div className="text-2xl font-semibold">{c.name}</div>
                <div className="mt-2 text-white/70">{c.tagline}</div>
              </div>

              {/* Company meta */}
              <div className="mt-4 space-y-1 text-sm text-white/60">
                {c.category && (
                  <div>
                    <span className="font-medium text-white/80">
                      Category:
                    </span>{" "}
                    {c.category}
                  </div>
                )}
                {c.pricing && (
                  <div>
                    <span className="font-medium text-white/80">
                      Pricing:
                    </span>{" "}
                    {c.pricing}
                  </div>
                )}
                {c.hq && (
                  <div>
                    <span className="font-medium text-white/80">HQ:</span>{" "}
                    {c.hq}
                  </div>
                )}
              </div>

              {/* Products / News / Launches */}
              <div className="mt-5 flex items-center gap-3 text-sm font-medium">
                <Link
                  href={`/companies/${c.slug}?view=products`}
                  className="text-white/75 hover:text-white hover:underline"
                >
                  Products
                </Link>
                <span className="text-white/20">•</span>
                <Link
                  href={`/companies/${c.slug}?view=news`}
                  className="text-white/75 hover:text-white hover:underline"
                >
                  News
                </Link>
                <span className="text-white/20">•</span>
                <Link
                  href={`/companies/${c.slug}?view=launches`}
                  className="text-white/75 hover:text-white hover:underline"
                >
                  Launches
                </Link>
              </div>

              {/* Footer links */}
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href={`/companies/${c.slug}`}
                  className="text-white/60 hover:text-white"
                >
                  View details →
                </Link>

                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline text-white/50 hover:text-white"
                  >
                    Website
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}