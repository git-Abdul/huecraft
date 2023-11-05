"use client"
import React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
import { HomeIcon, FileTextIcon, LayersIcon, CalendarIcon, IdCardIcon, ReaderIcon, InfoCircledIcon, QuestionMarkCircledIcon, BlendingModeIcon, EyeOpenIcon, LaptopIcon, FileIcon, RocketIcon } from "@radix-ui/react-icons"

export function Commands() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandSeparator />
        <CommandGroup heading="Main pages">
          <CommandSeparator />

          <Link href={"/"}>
            <CommandItem>
              <HomeIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Home</span>
            </CommandItem>
          </Link>

          <Link href={"/docs"}>
            <CommandItem>
              <FileTextIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Documentation</span>
            </CommandItem>
          </Link>

          <Link href={"/"}>
            <CommandItem>
              <LayersIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Templates</span>
            </CommandItem>
          </Link>

        </CommandGroup>
        <CommandSeparator />
        
        <CommandGroup heading="Templates">
          <CommandSeparator />
          <Link href={"/dashboard"}>
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Dashboard</span>
            </CommandItem>
          </Link>
          <Link href={"/pricing-page"}>
            <CommandItem>
              <IdCardIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Pricing page</span>
            </CommandItem>
          </Link>
          <Link href={"/blog-post"}>
            <CommandItem>
              <ReaderIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Blog post</span>
            </CommandItem>
          </Link>
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Documentation">
          <CommandSeparator />
          <Link href={"/docs#introduction"}>
            <CommandItem>
              <InfoCircledIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Introduction</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#how-it-works"}>
            <CommandItem>
              <QuestionMarkCircledIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">How does it work?</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#colors"}>
            <CommandItem>
              <BlendingModeIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Selecting colors</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#theming"}>
            <CommandItem>
              <EyeOpenIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Theming</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#upcoming"}>
            <CommandItem>
              <LaptopIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Upcoming</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#changelog"}>
            <CommandItem>
              <FileIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Changelog</span>
            </CommandItem>
          </Link>
          <Link href={"/docs#version"}>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span className="font-inter">Version</span>
            </CommandItem>
          </Link>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
