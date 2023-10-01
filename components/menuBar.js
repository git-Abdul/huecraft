"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button";

export function MenuBar() {
    const { setTheme } = useTheme()
    return (
        <>
            <div className="text-center items-center justify-center flex invisible md:visible">
                <div className="flex justify-center gap-2 item-blur mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "200" }}>
                    <button className="py-4 px-7 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-md">Text</button>
                    <button className="py-4 px-7 bg-slate-200 text-black dark:text-white dark:bg-zinc-800 rounded-md">Background</button>
                    <button className="py-4 px-7 bg-primary text-white dark:bg-primary rounded-md">Primary</button>
                    <button className="py-4 px-7 bg-indigo-400 dark:bg-indigo-400 rounded-md">Secondary</button>
                    <button className="py-4 px-7 bg-slate-400 dark:bg-zinc-700 rounded-md">Accent</button>
                    <hr className="w-0.5 h-14 rounded-lg bg-gray-400" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="w-[4rem] h-[3.5rem]">
                                <SunIcon className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
            </div>
        </>
    );
}
