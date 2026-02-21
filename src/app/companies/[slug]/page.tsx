"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { companies } from "../../data/companies";
import CompanySectionSwitch from "../../components/company/CompanySectionSwitch";
import CompanyProducts from "../../components/company/CompanyProducts";
import CompanyNews from "../../components/company/CompanyNews";
import CompanyLaunches from "../../components/company/CompanyLaunches";

type View = "products" | "news" | "launches";

function isView(v: string | null): v is View {
  return v === "products" || v === "news" || v === "launches";
}

export default function CompanyPage() {
  const params = useParams<{ slug?: string }>();
  const sp = useSearchParams();

  const slug = (params?.slug ? decodeURIComponent(params.slug) : "").toLowerCase();
  const view: View = isView(sp.get("view")) ? (sp.get("view") as View) : "products";

  const company = companies.find((c) => (c.slug ?? "").toLowerCase() === slug);

  if (!slug) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        <div className="text-xl font-semibold">Missing slug</div>
        <div className="mt-2 text-white/60">
          This page didn’t receive a route param. Try opening{" "}
          <code className="text-white/80">/companies/openai</code>.
        </div>
        <Link
          href="/companies"
          className="mt-4 inline-block underline text-white/70 hover:text-white"
        >
          ← Back to Companies
        </Link>
      </main>
    );
  }

  if (!company) {
    return (
      <main className="mx-auto max-w-6xl p-8">
        <div className="text-xl font-semibold">Company not found</div>
        <div className="mt-2 text-white/60">
          Looking for slug: <span className="text-white/80">{slug}</span>
        </div>
        <Link
          href="/companies"
          className="mt-4 inline-block underline text-white/70 hover:text-white"
        >
          ← Back to Companies
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8 space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <Link href="/companies" className="underline text-white/70 hover:text-white">
          ← Back
        </Link>
      </div>

      {/* Title */}
      <div>
        <h1 className="text-5xl font-semibold tracking-tight">{company.name}</h1>
        {company.tagline ? (
          <p className="mt-2 text-lg text-white/70">{company.tagline}</p>
        ) : null}
      </div>

      {/* Main card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        {/* Switch */}
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm text-white/50">
            View: <span className="text-white/80 font-medium capitalize">{view}</span>
          </div>
          <CompanySectionSwitch />
        </div>

        {/* Overview row */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {company.category ? (
              <div>
                <div className="text-sm text-white/40">Category</div>
                <div className="text-lg font-semibold text-white/90">
                  {company.category}
                </div>
              </div>
            ) : null}

            {company.hq ? (
              <div>
                <div className="text-sm text-white/40">HQ</div>
                <div className="text-lg font-semibold text-white/90">
                  {company.hq}
                </div>
              </div>
            ) : null}

            {company.notes ? (
              <div>
                <div className="text-sm text-white/40">Notes</div>
                <div className="text-white/80">{company.notes}</div>
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            {company.pricing ? (
              <div>
                <div className="text-sm text-white/40">Pricing</div>
                <div className="text-lg font-semibold text-white/90">
                  {company.pricing}
                </div>
              </div>
            ) : null}

            {company.website ? (
              <div>
                <div className="text-sm text-white/40">Website</div>
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-white/80 hover:text-white break-all"
                >
                  {company.website}
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* Section content */}
        <div className="mt-8">
          {view === "products" ? (
            <CompanyProducts company={company} />
          ) : view === "news" ? (
            <CompanyNews company={company} />
          ) : (
            <CompanyLaunches company={company} />
          )}
        </div>
      </div>
    </main>
  );
}