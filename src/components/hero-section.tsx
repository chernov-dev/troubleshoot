import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

import hero from "../../public/images/hero.webp";

const HeroSection = () => {
  return (
    <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <Image src={hero} width={320} alt="Hero image" priority />
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl">
            Computer problems? We&apos;ve got you covered.
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8">
            At Troubleshoot, we&apos;re committed to providing top-notch
            service and support to our customers. Let us help you get your
            computer running smoothly again – contact us today to learn more!
          </p>
        </div>
        <div className="flex gap-4">
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
      </section>
  )
}

export default HeroSection