export default function CompanyLaunches({ company }: { company: any }) {
  const items = (company.launches ?? []) as {
    title: string;
    url?: string;
    date?: string;
    summary?: string;
  }[];

  if (!items.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-white/70">
        No launches listed yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium text-white/80">Launches</div>

      <ul className="space-y-3">
        {items.map((l) => (
          <li
            key={`${l.title}-${l.date ?? ""}`}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="text-white/90 font-medium">{l.title}</div>

              {l.date ? (
                <div className="text-xs text-white/45">{l.date}</div>
              ) : null}
            </div>

            {l.summary ? (
              <div className="mt-2 text-sm text-white/65">
                {l.summary}
              </div>
            ) : null}

            <div className="mt-3">
              {l.url ? (
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline text-white/60 hover:text-white"
                >
                  Source
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}