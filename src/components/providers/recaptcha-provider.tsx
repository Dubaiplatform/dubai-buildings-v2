"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6LfzPaEtAAAAAGvuWz_I9GKymLe7xEvnLUHvJUUK";

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
