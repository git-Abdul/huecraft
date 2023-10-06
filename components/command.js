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
          <CommandGroup heading="Main pages">
            <CommandItem>Home</CommandItem>
            <Link href={"/docs"}><CommandItem>Docs</CommandItem></Link>
            <CommandItem>Templates</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Documentation">
            <CommandItem>Introduction</CommandItem>
            <CommandItem>How it works?</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    )
  }
  