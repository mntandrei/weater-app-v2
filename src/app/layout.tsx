import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather App V2",
  description: "Made by Andrei",
  icons: {
    icon: [{ url: "/weather-mark.svg", type: "image/svg+xml" }],
    shortcut: "/weather-mark.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
