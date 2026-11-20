"use client";

import { useState, type FormEvent } from "react";
import { ADMIN_API_URL } from "../../_lib/admin-api";

export type ContactFormProps = {
  interestOptions: string[];
  consentText: string;
  submitLabel: string;
};

const inputClass =
  "mt-2 block w-full rounded-lg border border-[#F2D6D6] bg-white px-3 py-2.5 text-sm text-[#050505] placeholder:text-[#9a9a9a] transition-colors duration-300 focus:border-[#F00012] focus:outline-none";
const labelClass = "block text-sm font-medium text-[#050505]";

export default function ContactForm({
  interestOptions,
  consentText,
  submitLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setError(null);

    if (!ADMIN_API_URL) {
      setError("This form is not connected yet. Please contact us by phone or email instead.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(`${ADMIN_API_URL}/api/public/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          mobile: String(data.get("mobile") ?? ""),
          interest: String(data.get("interest") ?? ""),
          consent: data.get("consent") === "on",
        }),
      });
      if (response.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      setError(
        response.status === 429
          ? "Too many submissions from your connection. Please try again later."
          : response.status === 422
            ? "Some details look invalid. Please check your name, email and mobile number."
            : "Something went wrong on our side. Please try again in a moment.",
      );
    } catch {
      setError("We could not reach the server. Check your connection and try again.");
    }
    setStatus("idle");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-8">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-mobile" className={labelClass}>
          Mobile Number
        </label>
        <input
          id="contact-mobile"
          name="mobile"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+91 90379 81682"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-interest" className={labelClass}>
          What are you interested in?
        </label>
        <select
          id="contact-interest"
          name="interest"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <label className="flex items-start gap-3 text-sm leading-[15px] text-[#555]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 size-4 shrink-0 accent-[#F00012]"
        />
        <span className="leading-5">{consentText}</span>
      </label>

      {status === "sent" ? (
        <p
          role="status"
          className="rounded-lg border border-[#F2D6D6] bg-white px-4 py-3 text-sm text-[#050505]"
        >
          Thanks for reaching out. The Hackliva team will get back to you shortly.
        </p>
      ) : (
        <div>
          {error && (
            <p role="alert" className="mb-4 text-sm text-[#D2000F]">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex h-[46px] items-center justify-center gap-3 rounded-lg bg-[#F00012] px-8 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#D2000F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F00012] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : submitLabel}
            <svg
              viewBox="0 0 8 8"
              fill="none"
              aria-hidden="true"
              className="size-2"
            >
              <path
                d="M1 7 7 1M7 1H2M7 1v5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </form>
  );
}
