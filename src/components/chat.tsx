'use client'
import * as React from "react"
import { BotIcon, Check, Plus, Send, XIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import Avatar from "react-avatar"
import { AvatarFallback, AvatarImage } from "./ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"
import { Separator } from "./ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"

const users = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Emma Wilson",
    email: "emma@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Jackson Lee",
    email: "lee@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    avatar: "/avatars/04.png",
  },
] as const

type User = (typeof users)[number]

export function CardsChat() {
  const [open, setOpen] = React.useState(false)
  const [selectedUsers, setSelectedUsers] = React.useState<User[]>([])

  const [messages, setMessages] = React.useState([
    {
      role: "agent",
      content: "Hi, how can I help you today?",
    },
    {
      role: "user",
      content: "Hey, I'm having trouble with my account.",
    },
    {
      role: "agent",
      content: "What seems to be the problem?",
    },
    {
      role: "user",
      content: "I can't log in.",
    },
  ])
  const [input, setInput] = React.useState("")
  const inputLength = input.trim().length

  return (
    <>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button size={"lg"}><BotIcon className="mr-3 w-5 h-5" /> Chat with support</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-[500px] absolute bottom-0 -right-20">
          <DropdownMenuLabel className="flex flex-row gap-4 items-center">
           Troubleshoot bot<BotIcon className="w-5 h-5" /> 
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Card className="border-none">
            <CardContent className="p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                      message.role === "user"
                        ? "ml-auto bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <DropdownMenuSeparator/>
              <form
                onSubmit={(event) => {
                  event.preventDefault()
                  if (inputLength === 0) return
                  setMessages([
                    ...messages,
                    {
                      role: "user",
                      content: input,
                    },
                  ])
                  setInput("")
                }}
                className="flex w-full items-center space-x-2"
              >
                <Input
                  id="message"
                  placeholder="Type your message..."
                  className="flex-1 border-none"
                  autoComplete="off"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                />
                <Button type="submit" size="icon" disabled={inputLength === 0}>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
        </DropdownMenuContent>
      </DropdownMenu>

    </>
  )
}