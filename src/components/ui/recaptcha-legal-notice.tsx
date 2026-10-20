export default function RecaptchaLegalNotice({
  className = "",
}: {
  className?: string;
}) {
  return (
    <p className={`text-xs text-gray-500 leading-relaxed ${className}`}>
      This site is protected by reCAPTCHA and the Google{" "}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-700"
      >
        Privacy Policy
      </a>{" "}
      and{" "}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-gray-700"
      >
        Terms of Service
      </a>{" "}
      apply.
    </p>
  );
}
