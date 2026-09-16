import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import ctechLogo from "@/assets/ctech-logo.png";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enrollment — CTech Cloud Academy" },
      {
        name: "description",
        content:
          "Talk to a counselor or enroll in a cohort at CTech Cloud Academy. Get guidance on the right IT course for your career.",
      },
      { property: "og:title", content: "Contact & Enrollment — CTech Cloud Academy" },
      {
        property: "og:description",
        content:
          "Talk to a counselor or enroll in a cohort at CTech Cloud Academy.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabase) {
      setError("Supabase is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const { error: insertError } = await supabase.from("Enquiry_From").insert([
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message,
        },
      ]);

      if (insertError) {
        throw insertError;
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      toast.success("Enquiry submitted successfully", {
        description: "Our admissions team will contact you soon.",
      });
    } catch {
      const message = "Something went wrong while submitting your enquiry. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md ring-1 ring-zinc-950/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={ctechLogo}
              alt="CTech Cloud Academy logo"
              className="size-8 rounded-sm object-contain"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              CTech Academy
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-cobalt px-4 py-2 text-sm font-medium text-white ring-1 ring-cobalt transition-transform hover:bg-cobalt-dark"
          >
            Back to home
          </Link>
        </div>
      </nav>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-deep ring-1 ring-gold/20">
              Admissions Open
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
              Talk to a counselor
            </h1>
            <p className="mx-auto mt-4 max-w-[52ch] text-pretty text-lg text-zinc-600">
              Tell us about your goals and our admissions team will help you
              choose the right course and secure your spot in the next cohort.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl bg-cobalt/5 p-10 text-center ring-1 ring-cobalt/10">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-cobalt text-white">
                <span className="text-lg">✓</span>
              </div>
              <h2 className="font-display text-2xl font-semibold text-zinc-950">
                Thank you!
              </h2>
              <p className="mt-2 text-zinc-600">
                Your enquiry has been received. Our admissions team will reach
                out within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl bg-zinc-50 p-8 ring-1 ring-zinc-950/5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Full name
                  </span>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Email
                  </span>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Phone
                  </span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 ..."
                    className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                  />
                </label>
                <div className="flex items-end">
                  <p className="text-sm text-zinc-500">We’ll contact you soon.</p>
                </div>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your background and goals..."
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                />
              </label>
              {error ? (
                <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-cobalt px-6 py-3 text-base font-medium text-white shadow-sm ring-1 ring-cobalt transition-colors hover:bg-cobalt-dark disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit enquiry"}
              </button>
              <p className="text-center text-xs text-zinc-400">
                We'll respond within one business day.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={ctechLogo}
                alt="CTech Cloud Academy logo"
                className="size-6 rounded-sm object-contain"
              />
              <span className="font-display text-sm font-semibold">
                CTech Cloud Academy
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} CTech Cloud Academy. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/company/ctech-cloud-academy/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-full border border-cobalt/20 bg-white text-lg text-cobalt shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-cobalt hover:text-white"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/ctech_academy?stkn=bG5nM3g3djllOWJ4"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-pink-200 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 text-lg font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                ◌
              </a>
              <a
                href="https://www.facebook.com/share/1DtV21dSTi/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-blue-200 bg-blue-600 text-lg font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                f
              </a>
              <a
                href="https://wa.me/916361810138?text=Hi%20CTech%20Cloud%20Academy"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-500 text-lg font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
              >
                W
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
