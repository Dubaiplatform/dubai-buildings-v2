import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

export type ButtonClickPayload = {
  button_text: string;
  button_id?: string;
  button_type?: string;
  page_path?: string;
  page_title?: string;
};

export function trackButtonClick(payload: ButtonClickPayload) {
  const data = {
    event: "button_click",
    button_text: payload.button_text,
    button_id: payload.button_id || undefined,
    button_type: payload.button_type || "button",
    page_path:
      payload.page_path ||
      (typeof window !== "undefined" ? window.location.pathname : undefined),
    page_title:
      payload.page_title ||
      (typeof window !== "undefined" ? document.title : undefined),
  };

  sendGTMEvent(data);
  sendGAEvent("event", "button_click", {
    button_text: data.button_text,
    button_id: data.button_id,
    button_type: data.button_type,
    page_path: data.page_path,
    page_title: data.page_title,
  });
}

export function getButtonLabel(el: HTMLElement): string {
  const aria = el.getAttribute("aria-label")?.trim();
  if (aria) return aria;

  const text = el.innerText?.replace(/\s+/g, " ").trim();
  if (text) return text.slice(0, 120);

  const title = el.getAttribute("title")?.trim();
  if (title) return title;

  return "unnamed_button";
}
