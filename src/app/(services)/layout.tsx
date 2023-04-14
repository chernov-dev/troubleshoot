import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { AppNav } from "@/components/app-nav";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

export default async function ServicesLayout({
  children,
}: ServicesLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <nav>
            <div className="flex gap-6 md:gap-10">
              <Link href="/" className="hidden items-center space-x-2 md:flex">
                <Icons.logo />
                <span className="hidden font-bold sm:inline-block">
                  {siteConfig.name}
                </span>
              </Link>
              {marketingConfig.mainNav?.length ? (
                <nav className="hidden gap-6 md:flex">
                  {marketingConfig.mainNav?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "flex items-center text-lg font-semibold text-slate-600 sm:text-sm",
                        item.disabled && "cursor-not-allowed opacity-80"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              ) : null}
            </div>
          </nav>
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Login
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
