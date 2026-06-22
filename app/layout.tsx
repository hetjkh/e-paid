import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/ThemeProvider";
import { InlineScript } from "./components/InlineScript";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const tasaOrbiter = localFont({
  src: [
    {
      path: "./fonts/TASAOrbiter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TASAOrbiter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/TASAOrbiter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/TASAOrbiter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/TASAOrbiter-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-tasa-orbiter-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ePAiD — MSP POS Service Provider",
  description:
    "We deliver smart digital solutions, secure payment systems, and expert advisory services that help businesses grow, streamline operations, and scale confidently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full overflow-x-clip", "bg-background", "antialiased", tasaOrbiter.variable, "font-sans", geist.variable)}
    >
      <head>
        <InlineScript
          html={`(function(){try{var t=localStorage.getItem("epaid-theme");var d=t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";var l=localStorage.getItem("epaid-language")||"en";document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";}catch(e){}})();`}
        />
      </head>
      <body className={`${tasaOrbiter.className} flex min-h-full flex-col overflow-x-clip bg-background font-tasa-orbiter text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
