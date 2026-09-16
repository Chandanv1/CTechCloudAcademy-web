import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import ctechLogo from "@/assets/ctech-logo.png";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CTech Cloud Academy — Mentor-Led IT Courses in Data, AI, DevOps & Security" },
      {
        name: "description",
        content:
          "Mentor-led, placement-focused training in Data Analytics, Data Engineering, Data Science, Agentic AI, DevOps and Cyber Security. Live classes, real projects, career support.",
      },
      { property: "og:title", content: "CTech Cloud Academy — Mentor-Led IT Courses" },
      {
        property: "og:description",
        content:
          "Live, mentor-led programs in Data, AI, DevOps and Cyber Security with real projects and placement support.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

type Track = "Data" | "AI" | "Cloud & Security";

const COURSES: {
  name: string;
  track: Track;
  tagline: string;
  duration: string;
  eligibility: string;
  highlights: string[];
  accent: "cobalt" | "gold";
}[] = [
  {
    name: "Data Analytics",
    track: "Data",
    tagline: "For freshers & professionals moving into analytics",
    duration: "4 Months",
    eligibility: "Any graduate, no coding background needed",
    highlights: [
      "Excel, SQL, Python and Power BI from scratch.",
      "Business case studies on real company datasets.",
      "Portfolio of 4 dashboards plus interview prep.",
    ],
    accent: "cobalt",
  },
  {
    name: "Data Engineering",
    track: "Data",
    tagline: "For engineers building large-scale data platforms",
    duration: "6 Months",
    eligibility: "Basic programming knowledge",
    highlights: [
      "Spark, Airflow, Kafka and warehouse modelling.",
      "Cloud pipelines on AWS and Azure.",
      "Capstone: an end-to-end production pipeline.",
    ],
    accent: "cobalt",
  },
  {
    name: "Data Science",
    track: "Data",
    tagline: "For those targeting ML and modelling roles",
    duration: "6 Months",
    eligibility: "Graduates comfortable with maths basics",
    highlights: [
      "Statistics, machine learning and deep learning.",
      "Model deployment with MLflow and Docker.",
      "Mentor-reviewed research-style capstone.",
    ],
    accent: "cobalt",
  },
  {
    name: "Agentic AI & AI Agents",
    track: "AI",
    tagline: "For developers building autonomous AI systems",
    duration: "4 Months",
    eligibility: "Working knowledge of Python",
    highlights: [
      "LLMs, RAG, tool use and multi-agent orchestration.",
      "Build with LangGraph, MCP and vector databases.",
      "Ship three production-grade agent applications.",
    ],
    accent: "gold",
  },
  {
    name: "DevOps",
    track: "Cloud & Security",
    tagline: "For engineers moving into DevOps, SRE & cloud",
    duration: "5 Months",
    eligibility: "Basic Linux familiarity",
    highlights: [
      "Docker, Kubernetes, Terraform and CI/CD pipelines.",
      "Observability, scaling and incident handling.",
      "Cloud certification-aligned practice labs.",
    ],
    accent: "cobalt",
  },
  {
    name: "Cyber Security",
    track: "Cloud & Security",
    tagline: "For those entering security operations & pentesting",
    duration: "5 Months",
    eligibility: "Any graduate with networking basics",
    highlights: [
      "Network security, SIEM and threat detection.",
      "Ethical hacking labs and incident response drills.",
      "Blue-team and red-team simulation projects.",
    ],
    accent: "cobalt",
  },
];

const TRACKS: (Track | "All Programs")[] = ["All Programs", "Data", "AI", "Cloud & Security"];

const STATS = [
  { value: "94%", label: "Placement Support Rate" },
  { value: "1,200+", label: "Learners Trained" },
  { value: "50+", label: "Industry Mentors" },
  { value: "4.9/5", label: "Learner Rating" },
];

const STEPS = [
  {
    step: "01",
    title: "Apply & Counselling Call",
    desc: "Share your background and goals. A counsellor maps the right track for you.",
  },
  {
    step: "02",
    title: "Live Mentor-Led Classes",
    desc: "Weekend and evening batches built around working professionals.",
  },
  {
    step: "03",
    title: "Projects & 1:1 Reviews",
    desc: "Build a real portfolio with code and design reviewed by practising engineers.",
  },
  {
    step: "04",
    title: "Interview & Placement Prep",
    desc: "Mock interviews, resume rewrites and referrals until you land the role.",
  },
];

const DIFFERENCES = [
  {
    title: "Industry-Led Projects",
    desc: "Work on real-world datasets and production environments from week one.",
  },
  {
    title: "1-on-1 Career Mentorship",
    desc: "Regular feedback loops with senior engineers working in the field.",
  },
  {
    title: "Doubt Support That Answers",
    desc: "Dedicated doubt sessions and a mentor channel with same-day responses.",
  },
  {
    title: "Lifetime Content Access",
    desc: "Recordings, labs and updated modules stay with you after you graduate.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Data Engineering track was rigorous and deeply practical. I moved from a support role into a pipeline engineering job within weeks of finishing.",
    name: "Sarah J.",
    role: "Data Engineer",
  },
  {
    quote:
      "CTech's focus on AI agents gave me a real edge. The hands-on labs were far better than any recorded course I had taken before.",
    name: "Michael R.",
    role: "AI Solutions Developer",
  },
  {
    quote:
      "Having a senior DevOps lead review my Terraform work every week changed how I think about infrastructure.",
    name: "Elena G.",
    role: "Cloud Engineer",
  },
];

const FAQS = [
  {
    q: "Do I need a coding background to join?",
    a: "Not for Data Analytics or Cyber Security — both start from fundamentals. Data Engineering, Data Science and Agentic AI expect basic Python or programming familiarity, and we share pre-course material to get you ready.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "All core sessions are live and mentor-led, with recordings available afterwards. Weekend and evening batches are designed for working professionals.",
  },
  {
    q: "What kind of placement support do you provide?",
    a: "Resume and LinkedIn rewrites, mock interviews with practising engineers, and interview referrals. Support continues after the programme ends until you are placed.",
  },
  {
    q: "Will I build real projects?",
    a: "Yes. Every track includes graded projects and a capstone reviewed one-on-one by a mentor, so you finish with a portfolio you can show in interviews.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes, instalment options are available. Talk to a counsellor and we will walk you through the plans that fit your situation.",
  },
];

function Index() {
  const [activeTrack, setActiveTrack] = useState<(typeof TRACKS)[number]>("All Programs");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const visibleCourses =
    activeTrack === "All Programs"
      ? COURSES
      : COURSES.filter((c) => c.track === activeTrack);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md ring-1 ring-zinc-950/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={ctechLogo}
              alt="CTech Cloud Academy logo"
              className="size-9 rounded-sm object-contain"
            />
            <span className="font-display text-base font-semibold uppercase tracking-tight sm:text-lg">
              CTech Cloud Academy
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#courses"
              className="hidden text-sm font-medium text-zinc-600 hover:text-cobalt md:block"
            >
              Programs
            </a>
            <a
              href="#how-it-works"
              className="hidden text-sm font-medium text-zinc-600 hover:text-cobalt md:block"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="hidden text-sm font-medium text-zinc-600 hover:text-cobalt md:block"
            >
              FAQ
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-cobalt px-4 py-2 text-sm font-medium text-white ring-1 ring-cobalt transition-colors hover:bg-cobalt-dark"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-cobalt-dark py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-cobalt/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 size-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Learn what the industry actually hires for
            </span>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Upskill with mentors.
              <br />
              <span className="text-gold">Land your dream role.</span>
            </h1>
            <p className="max-w-[52ch] text-pretty text-lg text-cobalt-100">
              Live, mentor-led programs in Data, AI, DevOps and Cyber Security —
              built for students and working professionals who want a real career
              switch, not another certificate.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-gold px-6 py-3 text-base font-semibold text-zinc-950 shadow-sm transition-colors hover:bg-gold-deep hover:text-white"
              >
                Apply Now
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                View Programs
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2 text-sm text-cobalt-100">
              <span className="font-display text-xl font-semibold text-white">4.9/5</span>
              <span className="h-5 w-px bg-white/20" />
              <span>Rated by our learner community</span>
            </div>
          </div>
          <div className="relative">
            <img
              src={classroomImg}
              alt="Learners working through a live mentor-led session"
              width={800}
              height={600}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-6 -left-4 hidden rounded-lg bg-white p-4 shadow-xl ring-1 ring-zinc-950/5 sm:block">
              <p className="text-xs font-semibold text-zinc-900">Next cohort starting soon</p>
              <p className="text-xs text-zinc-500">Limited seats per batch</p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats strip */}
      <section className="bg-zinc-950 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl font-semibold text-gold sm:text-3xl">
                {s.value}
              </span>
              <span className="text-xs uppercase tracking-wide text-zinc-400">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="courses" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex flex-col gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
              Our Programs
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Choose the right program for your career path
            </h2>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {TRACKS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTrack(t)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  activeTrack === t
                    ? "bg-cobalt text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((c) => (
              <article
                key={c.name}
                className="group flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-zinc-950/10 transition-shadow hover:shadow-lg"
              >
                <span
                  className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    c.accent === "gold"
                      ? "bg-gold/15 text-gold-deep"
                      : "bg-cobalt/10 text-cobalt"
                  }`}
                >
                  Live Online Program
                </span>
                <h3 className="font-display text-xl font-semibold text-zinc-950">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">{c.tagline}</p>

                <dl className="my-5 grid grid-cols-2 gap-4 border-y border-zinc-100 py-4">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                      Duration
                    </dt>
                    <dd className="text-sm font-medium text-zinc-900">{c.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                      Eligibility
                    </dt>
                    <dd className="text-sm font-medium text-zinc-900">{c.eligibility}</dd>
                  </div>
                </dl>

                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Program Highlights
                </p>
                <ul className="mb-6 flex flex-grow flex-col gap-2.5">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm text-zinc-600">
                      <span
                        className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] text-white ${
                          c.accent === "gold" ? "bg-gold-deep" : "bg-cobalt"
                        }`}
                      >
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-cobalt px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-dark"
                >
                  Explore Course
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 flex flex-col gap-4 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
              How It Works
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              A structured path from day one to job offer
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="flex flex-col gap-3 rounded-xl bg-white p-6 ring-1 ring-zinc-950/5"
              >
                <span className="font-display text-3xl font-semibold text-cobalt-100">
                  {s.step}
                </span>
                <h3 className="font-display text-base font-semibold text-zinc-950">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                The CTech Cloud Academy difference
              </h2>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {DIFFERENCES.map((d) => (
                  <li key={d.title} className="flex flex-col gap-2">
                    <div className="grid size-7 place-items-center rounded-full bg-gold text-[11px] text-white">
                      ✓
                    </div>
                    <h4 className="font-display font-semibold text-zinc-900">{d.title}</h4>
                    <p className="text-sm text-zinc-600">{d.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={classroomImg}
              alt="Students collaborating on laptops in a modern classroom"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl bg-zinc-50 object-cover shadow-2xl ring-1 ring-zinc-950/5"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
              Learner Stories
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From learning to leading
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col gap-4 rounded-xl bg-white p-8 ring-1 ring-zinc-950/5"
              >
                <span className="font-display text-3xl leading-none text-gold">“</span>
                <p className="text-sm leading-relaxed text-zinc-600">{t.quote}</p>
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-zinc-900">
                    {t.name}
                  </span>
                  <span className="block text-xs text-zinc-500">{t.role}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Questions learners ask us
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                className="rounded-xl bg-zinc-50 ring-1 ring-zinc-950/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-zinc-900">{f.q}</span>
                  <span
                    className={`shrink-0 text-cobalt transition-transform ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-zinc-600">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cobalt py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to accelerate your career?
          </h2>
          <p className="mb-10 text-pretty text-lg text-cobalt-100">
            Applications for the next cohort are open. Talk to a counsellor and
            find the track that fits your background.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-md bg-gold px-8 py-4 text-base font-semibold text-zinc-950 transition-colors hover:bg-gold-deep hover:text-white sm:w-auto"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="w-full rounded-md border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src={ctechLogo}
                alt="CTech Cloud Academy logo"
                className="size-6 rounded-sm object-contain"
              />
              <span className="font-display text-sm font-semibold uppercase">
                CTech Cloud Academy
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} CTech Cloud Academy. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-zinc-500 sm:gap-6">
              <a href="#courses" className="hover:text-cobalt">
                Programs
              </a>
              <a href="#faq" className="hover:text-cobalt">
                FAQ
              </a>
              <Link to="/contact" className="hover:text-cobalt">
                Admissions
              </Link>
              <a
                href="https://www.linkedin.com/company/ctech-cloud-academy/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cobalt"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/ctech_academy?stkn=bG5nM3g3djllOWJ4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cobalt"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1DtV21dSTi/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cobalt"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/916361810138?text=Hi%20CTech%20Cloud%20Academy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cobalt"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
