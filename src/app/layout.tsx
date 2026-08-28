import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: siteConfig.agencyName,
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t? t==="dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0f1020]">
        <SmoothScroll>
          <ThemeProvider>
            <Header />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
