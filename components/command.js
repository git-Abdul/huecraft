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
        <CommandSeparator />
        <CommandGroup heading="Main pages">
          <CommandSeparator />
          <CommandItem>Home</CommandItem>
          <Link href={"/docs"}><CommandItem>Docs</CommandItem></Link>
          <CommandItem>Templates</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Documentation">
          <CommandSeparator />
          <Link href={"/docs#introduction"}><CommandItem>Introduction</CommandItem></Link>
          <Link href={"/docs#how-it-works"}><CommandItem>How does it work?</CommandItem></Link>
          <Link href={"/docs#colors"}><CommandItem>Selecting Colors</CommandItem></Link>
          <Link href={"/docs#theming"}><CommandItem>Theming</CommandItem></Link>
          <Link href={"/docs#Upcoming"}><CommandItem>Upcoming</CommandItem></Link>
          <Link href={"/docs#changelog"}><CommandItem>Changelog</CommandItem></Link>
          <Link href={"/docs#version"}><CommandItem>Version</CommandItem></Link>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
