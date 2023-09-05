import CrewCard from "@/components/crew-card";
import { CardsTeamMembers } from "@/components/team-members";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { crewConfig } from "@/config/crew";
import { GithubIcon } from "lucide-react";


export default async function AboutPage() {
  return (
    <>
      <section id="crew" className="container py-6 space-y-6 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Meet the crew
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Talented and experienced crew at Troubleshoot who are dedicated to
            providing fast and reliable computer repair to our customers
          </p>
        </div>
        {/* <Card className="relative w-[480px]">
        <CardHeader>
            <div className="w-[350px] h-[350px] bg-black"></div>
          </CardHeader>
          <CardContent className="pl-12">
          <CardTitle>Vadim Yegay</CardTitle>
            <CardDescription>blah blah</CardDescription>
          </CardContent>
          <CardFooter className="absolute h-full w-20 right-0 top-0 flex flex-col gap-6 justify-between py-6">
            <GithubIcon className="w-5 h-5"></GithubIcon>
            <GithubIcon className="w-5 h-5"></GithubIcon>
            <GithubIcon className="w-5 h-5"></GithubIcon>
            <GithubIcon className="w-5 h-5"></GithubIcon>
            <div className="grow h-full bg-white w-0.5"></div>
          </CardFooter>
        </Card> */}
       {/* <div className="w-96">
       <CardsTeamMembers/>
       </div> */}
        <div className="mx-auto flex flex-col gap-4 md:max-w-[64rem]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-">
            {crewConfig.crew.map((crew, index) => (
              <CrewCard key={index} crew={crew}></CrewCard>
            ))}
            <a
              className="flex flex-col justify-center p-4 text-center border border-gray-200 border-dashed col-span-full lg:col-span-1 group rounded-xl md:p-6 hover:shadow-sm dark:border-gray-700"
              href="#"
            >
              <h3 className="text-lg leading-normal text-gray-800 sm:leading-7 dark:text-gray-200">
                About us
              </h3>
              <div>
                <span className="inline-flex items-center text-sm text-gray-500 gap-x-2">
                  We&apos;re a team of experienced technicians who are passionate
                  about helping people solve their computer problems.
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
            <a
              className="flex flex-col justify-center p-4 text-center border border-gray-200 border-dashed col-span-full lg:col-span-1 group rounded-xl md:p-6 hover:shadow-sm dark:border-gray-700"
              href="#"
            >
              <h3 className="text-lg leading-normal text-gray-800 sm:leading-7 dark:text-gray-200">
                About us
              </h3>
              <div>
                <span className="inline-flex items-center text-sm text-gray-500 gap-x-2">
                  We&apos;re a team of experienced technicians who are passionate
                  about helping people solve their computer problems.
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Troubleshoot can help you with a wide range of computer problems,
            including hardware issues, software installation, virus removal, and
            system optimization.
          </p>
        </div>
      </section>
    </>
  );
}
