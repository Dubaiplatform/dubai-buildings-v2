"use client";

import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

/**
 * Returns a function that executes reCAPTCHA v3 for a given action
 * and yields a token to send with the form payload.
 */
export function useRecaptchaToken() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const getToken = useCallback(
    async (action: string) => {
      if (!executeRecaptcha) {
        throw new Error("reCAPTCHA is not ready yet. Please try again.");
      }

      const token = await executeRecaptcha(action);
      if (!token) {
        throw new Error("Failed to generate reCAPTCHA token.");
      }

      return token;
    },
    [executeRecaptcha],
  );

  return { getToken, isReady: Boolean(executeRecaptcha) };
}
