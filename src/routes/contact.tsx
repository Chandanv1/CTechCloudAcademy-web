import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import ctechLogo from "@/assets/ctech-logo.png";

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

const COURSES = [
  "Data Analytics",
  "Data Engineering",
  "Data Science",
  "Agentic AI & AI Agents",
  "DevOps",
  "Cyber Security",
  "Not sure yet",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-5 rounded-xl bg-zinc-50 p-8 ring-1 ring-zinc-950/5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Full name
                  </span>
                  <input
                    required
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
                    type="tel"
                    placeholder="+91 ..."
                    className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-zinc-700">
                    Course of interest
                  </span>
                  <select
                    className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                    defaultValue={COURSES[0]}
                  >
                    {COURSES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Message
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell us about your background and goals..."
                  className="rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none focus:border-cobalt focus:ring-2 focus:ring-cobalt/20"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-cobalt px-6 py-3 text-base font-medium text-white shadow-sm ring-1 ring-cobalt transition-colors hover:bg-cobalt-dark"
              >
                Submit enquiry
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
          </div>
        </div>
      </footer>
    </div>
  );
}
