import * as React from "react"

import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          
        </div>
        <p className="text-sm leading-loose text-center md:text-left">
            &copy; Copyright 2023
          </p>
        <ModeToggle />
      </div>
    </footer>
  )
}
