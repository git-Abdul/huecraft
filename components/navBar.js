"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes"
import { DocsIcons } from "./docsIcon";
import { DocsList } from "./DocsList";
import { Badge } from "@/components/ui/badge";
import { version } from "@/components/version";
import Image from "next/image";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandInput,
} from "@/components/ui/command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { HomeIcon, LayersIcon, MoonIcon, SunIcon, FileTextIcon, CalendarIcon, IdCardIcon, ReaderIcon, InfoCircledIcon, QuestionMarkCircledIcon, BlendingModeIcon, EyeOpenIcon, LaptopIcon, FileIcon, RocketIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button";

export function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const { setTheme } = useTheme();

    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };
    return (
        <>
            <div>
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
            </div >
            {/* Navbar */}
            < nav className="backdrop-blur-lg bg-white/10 dark:bg-zinc-800/30 fixed py-3 md:py-0 select-none w-full top-0 z-10 shadow-sm" >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 my-1">
                    <Link href={"/"} className="flex items-center m-1">
                        <Image src="favicon.png" alt="logo" className="h-8 w-8 mr-2" width={"0"} height={"0"} />
                        <h1 className="text-2xl font-outfit font-bold mt-[2px]">HueCraft</h1>
                    </Link>
                    <div className="flex justify-normal left-0 gap-2">
                        <div className="md:invisible">
                            <Sheet className="border-none">
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <DocsIcons />
                                        <span className="sr-only">Open Documentation</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                    <SheetHeader>
                                        <SheetTitle>Documentation</SheetTitle>
                                        <SheetDescription>
                                            <div className="flex justify-center"><DocsList /></div>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <div className="md:invisible">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        <SunIcon className="mr-2 h-4 w-4" />
                                        <span className="font-inter">Light</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        <MoonIcon className="mr-2 h-4 w-4" />
                                        <span className="font-inter">Dark</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        <LaptopIcon className="mr-2 h-4 w-4" />
                                        <span className="font-inter">System</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <Button
                            onClick={toggleNav}
                            data-collapse-toggle="navbar-default"
                            type="button"
                            variant="outline"
                            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-white text-black dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded={isNavOpen ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </Button>
                    </div>
                    <div
                        className={`${isNavOpen ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-4 md:p-0 md:mb-0 -mb-32 mt-4 md:flex-row md:space-x-3 font-medium md:mt-0 md:border-0 transition-all ease-in-out duration-75">
                            <li className="my-2 block md:hidden">
                                <Button onClick={toggleDialog} variant="outline" className="dark:text-zinc-400 text-zinc-600 backdrop-blur-md">Search documentation... <Badge variant="secondary" className="ml-2 font-inter font-thin">⌘ K</Badge></Button>
                            </li>
                            <li className="py-3 rounded-lg md:dark:bg-transparent bg-orange-200 p-4 my-2 md:my-0 font-bridge transition duration-300 ease-in-out text-lg md:invisible visible">
                                <Link href={"/"}><p>Home</p></Link>
                            </li>
                            <li className="py-3 rounded-lg visible md:hidden md:dark:bg-transparent bg-orange-200 p-4 md:p-0 md:py-4 my-2 md:my-0 md:bg-transparent font-bridge md:text-base transition duration-300 ease-in-out text-lg">
                                <Link href={"/docs"}><p>Docs</p></Link>
                            </li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="md:hidden visible">
                                    <li className="py-3 rounded-lg bg-orange-200 md:dark:bg-transparent  p-4 md:p-0 md:py-3 my-2 md:my-0 md:bg-transparent font-bridge md:text-base transition duration-300 ease-in-out text-lg">
                                        <p className="text-left">Templates</p>
                                        <DropdownMenuContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                            <DropdownMenuLabel>Available templates</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <Link href={"/dashboard"}>
                                                <DropdownMenuItem>
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Dashboard</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/pricing-page"}>
                                                <DropdownMenuItem>
                                                    <IdCardIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Pricing page</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/blog-post"}>
                                                <DropdownMenuItem>
                                                    <ReaderIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Blog post</span>
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </li>
                                </DropdownMenuTrigger>
                            </DropdownMenu>
                            <li className="my-3 hidden md:block lg:hidden">
                                <Badge variant={"outline"} className="ml-2 font-inter font-thin">⌘ K</Badge>
                            </li>
                            <li className="my-2 hidden lg:block">
                                <Button onClick={toggleDialog} variant="outline" className="dark:text-zinc-400 text-zinc-600">Search documentation... <Badge variant="secondary" className="ml-2 font-inter font-thin">⌘ K</Badge></Button>
                            </li>
                            <li className="py-2 transition duration-300 ease-in-out text-lg md:mx-32 invisible md:visible">
                                <Link href={"/"}>
                                    <Button variant="outline" size="icon">
                                        <HomeIcon />
                                        <span className="sr-only">Home</span>
                                    </Button>
                                </Link>
                            </li>
                            <li className="py-2 transition duration-300 ease-in-out text-lg md:mx-32 invisible md:visible">
                                <div className="">
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant="outline" size="icon">
                                                <DocsIcons />
                                                <span className="sr-only">Open Templates</span>
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                            <SheetHeader>
                                                <SheetTitle className="flex justify-center text-xl"><Link href={"/docs"}>Documentation</Link></SheetTitle>
                                                <SheetDescription>
                                                    <div className="flex justify-center m-0"><DocsList /></div>
                                                </SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </li>
                            <li className="py-2 transition duration-300 ease-in-out text-lg md:mx-32 invisible md:visible">
                                <div className="">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="hidden md:block">
                                            <Button variant="outline" size="icon">
                                                <LayersIcon />
                                                <span className="sr-only">Open Templates</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                            <DropdownMenuLabel>Available templates</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <Link href={"/dashboard"}>
                                                <DropdownMenuItem>
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Dashboard</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/pricing-page"}>
                                                <DropdownMenuItem>
                                                    <IdCardIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Pricing page</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href={"/blog-post"}>
                                                <DropdownMenuItem>
                                                    <ReaderIcon className="mr-2 h-4 w-4" />
                                                    <span className="font-inter">Blog post</span>
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </li>
                            <li className="py-2 transition duration-300 ease-in-out text-lg md:mx-32 invisible md:visible">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">
                                        <DropdownMenuItem onClick={() => setTheme("light")}>
                                            <SunIcon className="mr-2 h-4 w-4" />
                                            <span className="font-inter">Light</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                                            <MoonIcon className="mr-2 h-4 w-4" />
                                            <span className="font-inter">Dark</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>
                                            <LaptopIcon className="mr-2 h-4 w-4" />
                                            <span className="font-inter">System</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
};