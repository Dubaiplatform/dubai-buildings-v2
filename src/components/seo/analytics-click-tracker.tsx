"use client";

import { useEffect } from "react";
import { getButtonLabel, trackButtonClick } from "@/lib/analytics";

/**
 * Captures clicks on every <button> (and role="button") sitewide
 * and forwards them to GTM + GA4 via @next/third-parties.
 */
export default function AnalyticsClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const button = target.closest(
        "button, [role='button'], input[type='submit'], input[type='button']",
      ) as HTMLElement | null;

      if (!button) return;
      if (button.hasAttribute("data-analytics-ignore")) return;
      if ((button as HTMLButtonElement).disabled) return;

      trackButtonClick({
        button_text: getButtonLabel(button),
        button_id: button.id || button.getAttribute("name") || undefined,
        button_type:
          button.getAttribute("type") ||
          button.tagName.toLowerCase() ||
          "button",
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
