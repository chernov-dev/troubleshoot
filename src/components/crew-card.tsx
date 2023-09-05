import { CrewProps } from "@/types";
import CrewAvatar from "./crew-avatar";
import Link from "next/link";
import { LinkedinIcon, MailIcon } from "lucide-react";
import Mailto from "./utils/mailto";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface CrewCardProps {
  crew: CrewProps;
}

const crewCard = ({ crew }: CrewCardProps) => {
  return (
    <Card className="relative overflow-hidden border flex flex-col">
      <CardHeader className="flex items-center gap-x-4">
        <CrewAvatar
          crew={crew}
        />
        <CardTitle className="font-bold">
          {crew.name}
        </CardTitle>
        <CardDescription className="overflow-hidden text-sm text-muted-foreground">{crew.title}</CardDescription>
      </CardHeader>
      <CardContent className="grow" title={crew.ambitions}><div className="md:line-clamp-1">{crew.ambitions}</div></CardContent>
      <CardFooter className=" justify-between">
      <div className="space-x-1">
      <Link
          className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
          href={"https://linkedin.com/in/" + crew.avatar?.linkedinHandle}
          target="_blank"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
        </Link>
        <Link
          className="inline-flex justify-center items-center text-gray-500 border border-gray-200 w-8 h-8 rounded-md hover:text-gray-800 hover:shadow-sm dark:hover:text-gray-200 dark:border-gray-700 dark:hover:shadow-slate-700/[.7]"
          href={"https://github.com/" + crew.avatar?.githubHandle}
          target="_blank"
        >
          <svg
            className="w-3.5 h-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Link>
      </div>
      
        <Button size={"sm"} asChild>
          <a
            href={`mailto:${crew.avatar?.email}?subject=${encodeURIComponent("subject") || ''}&body=${encodeURIComponent("body") || ''}`}>
            <MailIcon className="w-3.5 h-3.5 mr-2" />
            Contact
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default crewCard;
