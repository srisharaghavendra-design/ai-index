export default function CompanyProducts({ company }: { company: any }) {
  const items = (company.products ?? []) as {
    name: string;
    url?: string;
    type?: "model" | "api" | "app" | "platform" | "tooling" | "other";
    pricing?: string;
    summary?: string;
  }[];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/70">
        No products listed yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-white/80">Products</div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((p) => (
          <li
            key={p.name}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-white/90 font-medium">{p.name}</div>

              {p.type ? (
                <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/60">
                  {p.type}
                </span>
              ) : null}
            </div>

            {p.summary ? (
              <div className="mt-2 text-sm text-white/65">{p.summary}</div>
            ) : null}

            <div className="mt-3 flex items-center justify-between">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-white/60 hover:text-white"
                >
                  Source
                </a>
              ) : (
                <span className="text-sm text-white/30">No link</span>
              )}

              {p.pricing ? (
                <span className="text-xs text-white/45">{p.pricing}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}