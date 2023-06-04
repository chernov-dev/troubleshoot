import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default async function FaqPage() {
  return (
    <section id='contact' className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12">
      <div className="max-w-[85rem] mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center pb-8">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            FAQ
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here is some frequently asked questions, but feel free to contact us to ask us anything.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services does Troubleshoot offer?</AccordionTrigger>
              <AccordionContent>
                Troubleshoot offers a range of computer-related services including remote and in-person troubleshooting, networking work, and PC building. Our services also include virus removal, software installation, system optimization, hardware upgrades, and operating system updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where does Troubleshoot operate?</AccordionTrigger>
              <AccordionContent>
                Troubleshoot can provide remote services globally. For physical services such as PC building and in-person troubleshooting, we operate within the GTA region of Ontario, Canada.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are your operating hours?</AccordionTrigger>
              <AccordionContent>
                Our services are available 24/7 to meet your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How is pricing determined?</AccordionTrigger>
              <AccordionContent>
                Pricing depends on the scope of the work involved. We offer a BASIC plan covering virus removal, software installation, remote support, operating system updates, and system optimization. Services beyond these are covered under our PRO plan. Please contact us for more detailed pricing information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer any guarantees or warranties on your work?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a 100% guarantee on our services. If there are limitations to what we can do, we always do our best to meet your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How can I reach Troubleshoot for support?</AccordionTrigger>
              <AccordionContent>
                You can reach us for support through our website&apos;s online chat or by filling out the contact form. We also accept queries via email.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>How long does it typically take for a service?</AccordionTrigger>
              <AccordionContent>
                It typically takes about an hour to identify problems and another hour to fix them. However, more complex issues may require more time. For PC building, once all components have been shipped, we expect to complete the build within a maximum of 2 hours.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>How long does it typically take for a service?</AccordionTrigger>
              <AccordionContent>
                We can handle a variety of tasks remotely, including virus removal, software installation, remote support, operating system updates, and system optimization.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

  );
}
