"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
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
import { BookmarkIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button";
import { DocScroll } from "./DocScroll";

export function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const { setTheme } = useTheme();
    return (
        <>
            {/* Navbar */}
            <nav className="item-blur py-2 md:py-0 border-b dark:border-zinc-700 border-gray-300 select-none w-full top-0 z-10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 px-6">
                    <Link href={"/"} className="flex items-center m-1">
                        <img src="favicon.png" alt="logo" className="h-8 w-8 mr-2" />
                        <h1 className="text-2xl font-outfit font-bold">HueCraft</h1>
                        <span className="font-poppins text-sm mt-2 dark:text-zinc-400 text-zinc-500 ml-1">v0.2.2</span>
                    </Link>
                    <div className="flex justify-normal md:invisible visible">
                        <Sheet className="border-none">
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <BookmarkIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:filter-none invert dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Open Documentation</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Documentation</SheetTitle>
                                    <SheetDescription>
                                        <div className="flex justify-center"><DocScroll /></div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="flex justify-normal left-0 gap-2">
                        <div className="md:invisible">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                        <span className="sr-only">Toggle theme</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <button
                            onClick={toggleNav}
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 dark:focus:ring-gray-600"
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
                        </button>
                    </div>
                    <div
                        className={`${isNavOpen ? "block" : "hidden"
                            } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li className="py-3 font-bridge transition duration-300 ease-in-out text-lg md:invisible visible">
                                <Link href={"/"}><p>Home</p></Link>
                            </li>
                            <li className="py-3 font-bridge transition duration-300 ease-in-out text-lg">
                                <Link href={"/docs"}><p>Docs</p></Link>
                            </li>
                            <li className="py-3 font-bridge transition duration-300 ease-in-out text-lg">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>Templates</DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Available templates</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <Link href={"/dashboard"}><DropdownMenuItem>Dashboard</DropdownMenuItem></Link>
                                        <Link href={"/pricing-page"}><DropdownMenuItem>Pricing page</DropdownMenuItem></Link>
                                        <Link href={"/blog-post"}><DropdownMenuItem>Blog post</DropdownMenuItem></Link>
                                    </DropdownMenuContent>
                                </DropdownMenu>
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
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};
