import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CardsChat } from "@/components/chat";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BotIcon } from "lucide-react";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Troubleshoot",
    "Troubleshooting",
    "Troubleshoot PC",
    "PC repair",
    "Computer repair",
    "Laptop repair",
    "Virus removal",
    "Operating system updates",
    "Software installation",
    "Tech support",
    "Computer maintenance",
    "Hardware upgrades",
    "Personal computers",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Computer diagnostics",
    "Data recovery",
    "Network setup",
    "Remote support",
    "IT services",
    "Computer upgrades",
    "Computer optimization",
    "PC tune-up",
    "Computer security",
    "Firewall setup",
    "Antivirus software",
    "Malware removal",
    "Spyware removal",
    "Adware removal",
    "Data backup",
    "Cloud computing",
    "Computer peripherals",
    "Computer accessories",
    "Computer parts",
    "Computer peripherals repair", "Computer maintenance and repair",
    "Computer service",
    "Computer support",
    "Computer help",
    "Computer troubleshooting services",
    "IT support services",
    "Technology services",
    "Computer consulting",
    "Computer training",
    "Computer education",
    "Computer hardware",
    "Computer software",
    "Computer peripherals",
    "Computer networking",
    "Computer server",
    "Server maintenance",
    "Server setup",
    "Virtual server",
    "Managed IT services",
    "On-site computer service",
    "Remote computer service",
    "Online computer service",
    "Desktop computer repair",
    "Mobile computer repair",
    "Computer screen repair",
    "Computer virus protection",
    "Cybersecurity services",
    "Network security",
    "Wireless networking",
    "Wired networking",
    "Computer cables",
    "Computer power supply",
    "Computer memory",
    "Computer storage",
    "Computer graphics card",
    "Computer CPU",
    "Computer motherboard",
    "Computer fans and cooling",
    "Computer repair shop"
  ],
  authors: [
    {
      name: "chernov-dev",
      url: "https://troubleshoots.vercel.app/",
    },
  ],
  creator: "chernov-dev",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@maxchernov.a",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
          <div className="md:fixed bottom-5 right-5">
                <CardsChat />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
