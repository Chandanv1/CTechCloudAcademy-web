import { createFileRoute, Link } from "@tanstack/react-router";
import ctechLogo from "@/assets/ctech-logo.png";
import classroomImg from "@/assets/classroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CTech Cloud Academy — Expert-Led IT Courses in Data, AI & Security" },
      {
        name: "description",
        content:
          "Career-ready, hands-on IT training in Data Analytics, Data Engineering, Data Science, Agentic AI & AI Agents, DevOps, and Cyber Security. Learn from industry veterans.",
      },
      { property: "og:title", content: "CTech Cloud Academy — Expert-Led IT Courses" },
      {
        property: "og:description",
        content:
          "Hands-on, career-ready IT training in Data, AI, DevOps, and Cyber Security.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const COURSES = [
  {
    name: "Data Analytics",
    desc: "Transform raw data into strategic business insights using SQL, Python, and Tableau.",
    accent: "cobalt",
  },
  {
    name: "Data Engineering",
    desc: "Build scalable data pipelines and modern warehouse architectures using Spark and Airflow.",
    accent: "cobalt",
  },
  {
    name: "Data Science",
    desc: "Master predictive modeling and statistical analysis to solve complex organizational problems.",
    accent: "cobalt",
  },
  {
    name: "Agentic AI & AI Agents",
    desc: "Develop autonomous AI systems that reason, plan, and execute tasks using LLM frameworks.",
    accent: "gold",
  },
  {
    name: "DevOps",
    desc: "Implement CI/CD, Kubernetes orchestration, and Infrastructure as Code for high-velocity teams.",
    accent: "cobalt",
  },
  {
    name: "Cyber Security",
    desc: "Defend digital assets through threat detection, incident response, and ethical hacking.",
    accent: "cobalt",
  },
] as const;

const STATS = [
  { value: "94%", label: "Placement Rate" },
  { value: "1,200+", label: "Graduates Trained" },
  { value: "50+", label: "Expert Mentors" },
  { value: "4.9/5", label: "Student Satisfaction" },
];

const DIFFERENCES = [
  {
    title: "Industry-Led Projects",
    desc: "Work on real-world datasets and production environments from week one.",
  },
  {
    title: "1-on-1 Career Mentorship",
    desc: "Regular feedback loops with senior engineers from top tech companies.",
  },
  {
    title: "Lifelong Network Access",
    desc: "Join an alumni community working across global cloud infrastructures.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Data Engineering track was rigorous and deeply practical. I landed a role at a major fintech firm within three weeks of graduating.",
    name: "Sarah J.",
    role: "Data Engineer at CapitalOne",
  },
  {
    quote:
      "CTech's focus on AI Agents gave me a unique edge in the job market. The hands-on labs were far superior to any online tutorial I've taken.",
    name: "Michael R.",
    role: "AI Solutions Architect",
  },
  {
    quote:
      "The mentorship was the highlight for me. Having a senior DevOps lead review my Terraform scripts was incredibly valuable.",
    name: "Elena G.",
    role: "Cloud Engineer at Stripe",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      {/* Navigation */}
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
          <div className="flex items-center gap-6">
            <a
              href="#courses"
              className="hidden text-sm font-medium text-zinc-600 hover:text-cobalt sm:block"
            >
              Course Catalog
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md bg-cobalt px-4 py-2 text-sm font-medium text-white ring-1 ring-cobalt transition-transform hover:bg-cobalt-dark"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-deep ring-1 ring-gold/20">
              Career-Ready Training
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-none tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Master the Cloud with{" "}
              <span className="text-cobalt">Expert-Led</span> IT Courses
            </h1>
            <p className="max-w-[48ch] text-pretty text-lg text-zinc-600">
              Bridge the gap between theory and industry practice. Join CTech
              Cloud Academy to gain hands-on experience in Data, AI, and
              Security.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="inline-flex items-center rounded-md bg-cobalt px-6 py-3 text-base font-medium text-white shadow-sm ring-1 ring-cobalt transition-colors hover:bg-cobalt-dark"
              >
                Explore Courses
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900"
              >
                Talk to a counselor
                <span className="block size-1.5 rounded-full bg-gold"></span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={ctechLogo}
              alt="CTech Cloud Academy graduation-cap brandmark"
              className="aspect-square w-full rounded-xl bg-zinc-100 object-contain ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-white p-4 shadow-xl ring-1 ring-zinc-950/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-zinc-200 ring-2 ring-white"></div>
                  <div className="size-8 rounded-full bg-zinc-300 ring-2 ring-white"></div>
                  <div className="size-8 rounded-full bg-zinc-400 ring-2 ring-white"></div>
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-zinc-900">Join 1.2k+ students</p>
                  <p className="text-zinc-500">Learning this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Band */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-semibold text-cobalt">
                  {s.value}
                </span>
                <span className="text-sm text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950">
              Comprehensive IT Curriculum
            </h2>
            <p className="max-w-[56ch] text-pretty text-zinc-600">
              Our tracks are designed by industry veterans to take you from
              foundational concepts to production-level expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => (
              <div
                key={c.name}
                className="group relative flex flex-col rounded-xl bg-zinc-50 p-6 ring-1 ring-zinc-950/5 transition-colors hover:bg-zinc-100"
              >
                <div
                  className={`mb-4 flex size-10 items-center justify-center rounded-md ${
                    c.accent === "gold"
                      ? "bg-gold/10 text-gold-deep"
                      : "bg-cobalt/5 text-cobalt"
                  }`}
                >
                  <div className="size-4 border-2 border-current"></div>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-zinc-900">
                  {c.name}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-zinc-600">
                  {c.desc}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt"
                >
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-950">
                The CTech Cloud Academy Difference
              </h2>
              <ul className="flex flex-col gap-6">
                {DIFFERENCES.map((d) => (
                  <li key={d.title} className="flex gap-4">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold text-white">
                      <span className="text-[10px]">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-zinc-900">{d.title}</h4>
                      <p className="text-sm text-zinc-600">{d.desc}</p>
                    </div>
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
              className="aspect-[4/3] w-full rounded-xl bg-white object-cover shadow-2xl ring-1 ring-zinc-950/5"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              From Learning to Leading
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col gap-4 rounded-lg bg-zinc-50 p-8 ring-1 ring-zinc-950/5"
              >
                <p className="text-sm italic leading-relaxed text-zinc-600">
                  “{t.quote}”
                </p>
                <cite className="not-italic">
                  <span className="block text-sm font-semibold text-zinc-900">
                    {t.name}
                  </span>
                  <span className="block text-xs text-pretty text-zinc-500">
                    {t.role}
                  </span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cobalt py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="size-12 grid place-items-center rounded-full bg-white/10 text-white">
              <img
                src={ctechLogo}
                alt=""
                className="size-8 rounded-full object-contain invert"
              />
            </div>
          </div>
          <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to accelerate your career?
          </h2>
          <p className="mb-10 text-pretty text-lg text-cobalt-100">
            Applications for the next cohort are now open. Secure your spot and
            join the next generation of cloud professionals.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="w-full rounded-md bg-white px-8 py-4 text-base font-semibold text-cobalt transition-colors hover:bg-zinc-100 sm:w-auto"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="w-full rounded-md border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Contact Admissions
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
              <span className="font-display text-sm font-semibold">
                CTech Cloud Academy
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} CTech Cloud Academy. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-xs font-medium text-zinc-500">
              <Link to="/contact" className="hover:text-cobalt">
                Admissions
              </Link>
              <a href="#courses" className="hover:text-cobalt">
                Courses
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
