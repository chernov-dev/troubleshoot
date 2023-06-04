import Link from "next/link"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Pricing",
}

export default function PricingPage() {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Unlimited Users
            </li>

            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="w-4 h-4 mr-2" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="font-bold text-7xl">$19</h4>
            <p className="text-sm font-medium text-muted-foreground">
              Billed Monthly
            </p>
          </div>
          <Button size={"lg"} disabled>
            <Link href="/login">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          You can comeback later to see if there are more options.{" "}
          <strong>Troubleshoot is in development.</strong>
        </p>
      </div>
    </section>
  )
}
