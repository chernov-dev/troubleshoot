import Image from 'next/image'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { QuoteIcon } from 'lucide-react'
import Link from 'next/link'

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="py-8 space-y-6 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Upgrade now
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Whether
          you need help setting up a new computer, upgrading your operating
          system, or fixing a hardware issue, we&apos;ve got you covered.
        </p>
        <div className=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <QuoteIcon className='h-12 w-12 mx-auto mb-3 '/>
          <blockquote>
            <p className="leading-normal text-muted-foreground sm:text-2xl sm:leading-7">"I had been struggling with a slow and virus-infested computer for weeks until I came across Troubleshoot. Their remote services were a lifesaver! The technician was professional, patient, and efficient. My PC is now running like new, thanks to their virus removal and system optimization. I highly recommend Troubleshoot for all your computer needs."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium ">Michael W.</div>
              <div className="pl-3 text-sm font-light ">Regular customer</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <Button><Link href={"contact"}>
      Contact us</Link></Button>
      </div>
    </section>
  )
}

export default TestimonialSection