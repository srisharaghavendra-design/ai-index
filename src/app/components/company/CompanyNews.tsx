export default function CompanyNews({ company }: { company: any }) {
  const items = (company.news ?? []) as {
    title: string;
    url?: string;
    date?: string;
    summary?: string;
    tags?: string[];
  }[];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/70">
        No news added yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-white/80">News</div>

      <ul className="space-y-3">
        {items.map((n) => (
          <li
            key={`${n.title}-${n.url ?? ""}`}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-white/90 font-medium">{n.title}</div>

              {n.date ? (
                <div className="text-xs text-white/45">{n.date}</div>
              ) : null}
            </div>

            {n.summary ? (
              <div className="mt-2 text-sm text-white/65">
                {n.summary}
              </div>
            ) : null}

            <div className="mt-3 flex items-center justify-between">
              {n.url ? (
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-white/60 hover:text-white"
                >
                  Source
                </a>
              ) : (
                <span className="text-sm text-white/30">
                  No link
                </span>
              )}

              {n.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {n.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}