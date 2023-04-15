import { crewConfig } from "@/config/crew";
import Image from "next/image";
import React from "react";
import CrewCard from "./crew-card";

const CrewSection = () => {
  return (
    <section className="container flex flex-col  gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl  dark:text-white">
          Meet the crew
        </h2>
        <p className="mt-2 leading-normal text-slate-700 sm:text-lg sm:leading-7">
          Talented and experienced crew at Troubleshoot who are dedicated to
          providing fast and reliable computer repair to our customers
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-4 md:max-w-[64rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-">
          {crewConfig.crew.map((crew, index) => (
            <CrewCard key={index} crew={crew}></CrewCard>
          ))}
          <a
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#"
          >
            <h3 className="leading-normal sm:leading-7 text-lg text-gray-800 dark:text-gray-200">
              About us
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-sm text-gray-500">
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
            className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray-200 hover:shadow-sm dark:border-gray-700"
            href="#"
          >
            <h3 className="leading-normal sm:leading-7 text-lg text-gray-800 dark:text-gray-200">
              About us
            </h3>
            <div>
              <span className="inline-flex items-center gap-x-2 text-sm text-gray-500">
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
    </section>
  );
};

export default CrewSection;
