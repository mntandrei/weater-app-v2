"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, CloudSun, Info } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "Weather", href: "/Weather", icon: CloudSun },
  { label: "Info", href: "/Info", icon: Info },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 flex h-screen w-64 flex-col bg-linear-to-b from-[#101e38] via-[#183b6b] to-[#1b528a] px-4 text-white shadow-xl">
      <div className="flex items-center gap-3 border-b border-white/15 px-2 py-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
          <CloudSun size={26} className="text-sky-300" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Weather App
          </h1>
          <p className="text-xs text-slate-300">
            Your weather dashboard
          </p>
        </div>
      </div>
      <div className="pt-8">
        <p className="mb-4 px-4 text-xs font-semibold tracking-widest text-slate-400">
          MENU
        </p>
        <div className="flex flex-col gap-4">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 
                ${isActive ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <Icon size={21} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-auto border-t border-white/15 px-3 py-5">
        <div className="flex items-center gap-2 text-slate-300">
          <CloudSun size={17} />
          <span className="text-xs">By Muntianu Andrei</span>
        </div>
      </div>
    </nav>
  );
}
