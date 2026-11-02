"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, CloudSun, Info, Cloud } from "lucide-react";

const navLinks = [
  { label: "Dashboard", href: "/", icon: House },
  { label: "Info", href: "/Info", icon: Info },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex h-16 items-center border-t border-white/10 bg-[#132b4e] text-white md:inset-y-0 md:right-auto md:h-dvh md:w-56 md:flex-col md:border-r md:border-t-0 md:bg-linear-to-b md:from-[#101e38] md:to-[#20538a]">

      <div className="hidden w-full items-center gap-3 border-b border-white/15 px-4 py-6 md:flex">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
          <CloudSun size={24} className="text-sky-300" />
        </div>

        <div className="min-w-0">
          <h1 className="text-base font-semibold">
            Weather App
          </h1>
          <p className="text-[10px] text-slate-300">
            Your weather dashboard
          </p>
        </div>
      </div>

      <div className="w-full md:pt-6">
        <p className="mb-3 hidden px-5 text-[11px] font-semibold tracking-widest text-slate-400 md:block">
          MENU
        </p>

        <div className="grid grid-cols-3 gap-1 px-2 md:flex md:flex-col md:gap-2 md:px-3">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center gap-1 rounded-lg px-2 py-2 text-[11px] transition-colors md:flex-row md:justify-start md:gap-3 md:px-3 md:py-2.5 md:text-sm ${
                  isActive ? "bg-white/15 text-white": "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={19} className="shrink-0" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto hidden w-full px-4 pb-5 md:block">
        <div className="flex items-center gap-2 border-t border-white/15 pt-4 text-xs text-slate-300">
          <Cloud size={17} />
          <span>By Muntianu Andrei</span>
        </div>
      </div>
    </nav>
  );
}