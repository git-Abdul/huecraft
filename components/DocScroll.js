"ise client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DocScroll() {
    return (
        <ScrollArea className="w-48 fixed h-screen text-center text-lg border-r dark:border-zinc-700 border-gray-300">
            <div className="p-4 text-sm">
                <h4 className="text-xl p-2 font-inter font-bold leading-none text-center md:block hidden">Documentation</h4>
                <Badge variant="destructive">In Development</Badge>
                <Link href={"/docs#introduction"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Introduction</p>
                </div>
                </Link>
                <Link href={"/docs#how-it-works"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>How it works?</p>
                </div>
                </Link>
                <Link href={"/docs#colors"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Selecting colors</p>
                </div>
                </Link>
                <Link href={"/docs#theming"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Theming</p>
                </div>
                </Link>
                <Link href={"/docs#upcoming"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>What's to come?</p>
                </div>
                </Link>
                <Link href={"/docs#changelog"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Changelog</p>
                </div>
                </Link>
                <Link href={"/docs#version"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Version</p>
                </div>
                </Link>
            </div>
        </ScrollArea>
    )
}
