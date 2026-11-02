import Link from "next/link";
import NavBar from "@/app/components/layout/NavBar";
import { FaGithub } from "react-icons/fa";

import {
  CloudSun,
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Code2,
  Cloud,
  Search,
  ChartNoAxesColumnIncreasing,
  CalendarDays,
  History,
  Heart,
  BrainCircuit,
  Lightbulb,
  BookOpen,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "City Search",
    description:
      "Search for cities around the world and explore their weather conditions.",
    icon: Search,
    color: "text-blue-600",
    background: "bg-blue-50",
  },
  {
    title: "Live Weather Data",
    description:
      "Access current temperature, humidity, wind speed and atmospheric pressure.",
    icon: Cloud,
    color: "text-sky-600",
    background: "bg-sky-50",
  },
  {
    title: "Weather Forecast",
    description:
      "Explore upcoming weather conditions with a detailed five-day forecast.",
    icon: CalendarDays,
    color: "text-violet-600",
    background: "bg-violet-50",
  },
  {
    title: "Temperature Trends",
    description:
      "Visualize temperature changes through a clean and dynamic chart.",
    icon: ChartNoAxesColumnIncreasing,
    color: "text-emerald-600",
    background: "bg-emerald-50",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Lucide React",
  "OpenWeatherMap API",
];

const aiLearning = [
  {
    title: "Understanding Concepts",
    description:
      "Using AI to better understand React, TypeScript, APIs and application architecture.",
    icon: BookOpen,
  },
  {
    title: "Problem Solving",
    description:
      "Getting guidance when debugging errors and learning how to approach technical challenges.",
    icon: Lightbulb,
  },
  {
    title: "Improving My Skills",
    description:
      "Learning better development practices and understanding why different solutions work.",
    icon: BrainCircuit,
  },
];

export default function Info() {
  return (
    <>
      <NavBar />
      <main className="min-h-dvh bg-slate-50 px-4 py-6 pb-24 text-slate-900 sm:px-6 md:ml-56 md:px-8 md:py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">

          <section className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-900 via-blue-700 to-sky-500 p-6 text-white shadow-sm sm:p-8">
            <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -top-10 -right-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">
                <CloudSun size={15} />
                About Weather App
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Weather App
                <span className="ml-3 text-sky-200">
                  v2.0
                </span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
                A redesigned and improved version of my
                original Weather App. Built with modern
                technologies, a cleaner interface, and a
                better weather dashboard experience.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/mntandrei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50">
                  <FaGithub size={18} />
                  My GitHub
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://weather-app-seven-theta-62.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/20">
                  Previous Version
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                  <History
                    size={22}
                    className="text-slate-500"
                  />
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  Version 1.0
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                Where It Started
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                My original Weather App was the starting
                point of this project. It helped me explore
                weather APIs, build a functional interface,
                and develop my front-end development skills.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                This first version represents an important
                step in my learning journey and became
                the foundation for Weather App v2.
              </p>

              <div className="mt-auto flex flex-wrap gap-4 pt-5">
                <a
                  href="https://weather-app-seven-theta-62.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800">
                  Visit Original App
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="https://github.com/mntandrei/weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
                  <FaGithub size={17} />
                  Source Code
                </a>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <CloudSun
                    size={23}
                    className="text-blue-600"
                  />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  Version 2.0
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                A Better Experience
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Weather App v2 builds on the original
                idea with a modern dashboard, reusable
                React components, improved data handling,
                detailed forecasts, and a more polished
                user interface.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                This version reflects my progress as a
                front-end developer, with a stronger focus
                on code structure, maintainability,
                responsive design and user experience.
              </p>

              <div className="mt-auto flex flex-wrap gap-4 pt-5">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800">
                  Explore Dashboard
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://github.com/mntandrei/weater-app-v2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-800">
                  <FaGithub size={17} />
                  Source Code
                </a>
              </div>
            </article>
          </section>

          <section>
            <div className="mb-4">
              <h2 className="text-xl font-bold tracking-tight">
                What&apos;s Inside
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Features built to make checking the weather
                simple and informative.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.background}`}>
                      <Icon
                        size={21}
                        className={feature.color}
                      />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Code2
                    size={21}
                    className="text-blue-600"
                  />
                </div>

                <div>
                  <h2 className="text-base font-bold text-slate-900">
                    Built With
                  </h2>

                  <p className="text-xs text-slate-500">
                    Technologies powering Weather App v2
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm leading-6 text-slate-500">
                This project was built using modern
                front-end technologies, with an emphasis
                on reusable components, clean structure
                and responsive user interfaces.
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-violet-50/70 blur-2xl" />

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
                    <BrainCircuit
                      size={21}
                      className="text-violet-600"
                    />
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      AI-Assisted Learning
                    </h2>

                    <p className="text-xs text-slate-500">
                      Using AI as a learning and guidance tool
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  While developing Weather App v2, I used AI
                  as a learning assistant to help me
                  understand programming concepts, explore
                  different approaches, and solve development
                  challenges.
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  AI provided explanations, suggestions,
                  and guidance throughout the process.
                  My goal was not just to build a working
                  application, but to understand how and
                  why the code works.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700">
                  <Sparkles size={15} />
                  Learning through understanding
                </div>
              </div>
            </article>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
              <h2 className="text-base font-bold text-slate-900">
                How AI Supported My Learning
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                A tool for guidance, practice and continuous improvement.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {aiLearning.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-violet-600">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <Code2
                size={24}
                className="text-blue-600"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Created by Andrei
              </h2>

              <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
                A personal front-end development project
                created to improve my skills, understand
                modern web technologies, and build better
                digital experiences through continuous
                learning and practice.
              </p>
            </div>
          </section>

          <footer className="flex flex-col gap-2 border-t border-slate-200 pt-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © 2026 Weather App v2. Built by Andrei.
            </span>

            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={13}
                className="text-red-400"/>
              and React
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
