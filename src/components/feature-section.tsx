import React from 'react'

const FeatureSection = () => {
  return (
    <section className="container grid justify-center gap-8 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            We provide comprehensive computer repair, updating, and
            troubleshooting services to individuals and businesses. Our team of
            experienced technicians can help you with a wide range of computer
            problems, including hardware issues, software installation, virus
            removal, and system optimization
          </p>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[220px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-12 w-12 lucide lucide-shield-alert"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Virus Removal</h3>
                <p className="text-sm text-slate-100">
                  We can help you remove all types of viruses, malware, and
                  spyware from your computer to ensure it&apos;s running
                  smoothly and securely.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[220px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-12 h-12 lucide lucide-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">
                  Software Installation
                </h3>
                <p className="text-sm text-slate-100">
                  We help you install and configure software programs, including
                  productivity tools, antivirus software, and multimedia apps.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[220px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-12 h-12 lucide lucide-screen-share"
              >
                <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"></path>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
                <path d="m17 8 5-5"></path>
                <path d="M17 3h5v5"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Remote Support</h3>
                <p className="text-sm text-slate-100">
                  In many cases, we can provide remote support to diagnose and
                  fix your computer issues without the need for an in-person
                  visit.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[245px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-laptop"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                </svg>{" "}
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">
                  Operating System Updates
                </h3>
                <p className="text-sm text-slate-100">
                  We can help you upgrade your operating system to the latest
                  version, ensuring you have access to the latest features and
                  security updates.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[245px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-12 h-12 lucide lucide-wrench"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">
                  System Optimization
                </h3>
                <p className="text-sm text-slate-100">
                  We can help you optimize your computer&apos;s performance by
                  cleaning up unnecessary files, tweaking settings to improve
                  speed and efficiency
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[245px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-12 h-12 lucide lucide-hard-drive"
              >
                <line x1="22" x2="2" y1="12" y2="12"></line>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                <line x1="6" x2="6.01" y1="16" y2="16"></line>
                <line x1="10" x2="10.01" y1="16" y2="16"></line>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Hardware Upgrades</h3>
                <p className="text-sm text-slate-100">
                  If your computer is running slowly or need more storage space,
                  we can upgrade your hardware, including RAM, hard drives, and
                  graphics cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeatureSection