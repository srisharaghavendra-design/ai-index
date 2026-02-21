"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type View = "products" | "news" | "launches";

const VIEWS: { key: View; label: string }[] = [
  { key: "products", label: "Products" },
  { key: "news", label: "News" },
  { key: "launches", label: "Launches" },
];

function isView(v: string | null): v is View {
  return v === "products" || v === "news" || v === "launches";
}

export default function CompanySectionSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const current: View = isView(sp.get("view")) ? (sp.get("view") as View) : "products";

  function setView(view: View) {
    const next = new URLSearchParams(sp.toString());
    next.set("view", view);
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur">
      {VIEWS.map((v) => {
        const active = v.key === current;

        return (
          <button
            key={v.key}
            onClick={() => setView(v.key)}
            className={[
              "px-4 py-2 text-sm rounded-lg transition",
              active
                ? "bg-white/15 text-white"
                : "text-white/70 hover:bg-white/10 hover:text-white",
            ].join(" ")}
            type="button"
          >
            {v.label}
          </button>
        );
      })}
    </div>
  );
}