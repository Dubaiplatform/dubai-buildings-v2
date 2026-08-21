"use client";

import { useEffect } from "react";

export default function RedirectClient({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <main className="min-h-[40vh] flex items-center justify-center px-6">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <p className="text-gray-700">
        Redirecting to{" "}
        <a href={href} className="underline text-black">
          {href}
        </a>
        …
      </p>
    </main>
  );
}
