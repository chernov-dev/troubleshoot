import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import hero from "../../public/images/hero.webp"
import { buttonVariants } from "./ui/button"

const HeroSection = () => {
  return (
    <section className="pt-6 pb-8 space-y-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Image src={hero} width={320} alt="Hero image" priority />
        <h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">
          Computer problems? We&apos;ve got you covered.
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          At Troubleshoot, we&apos;re committed to providing top-notch service
          and support to our customers. Let us help you get your computer
          running smoothly again – contact us today to learn more!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/faq" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started Now
          </Link>
          <Link
            href={"/contact"}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
