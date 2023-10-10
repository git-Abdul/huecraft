"ise client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DocsList() {
    return (
        <ScrollArea className="w-48 fixed h-screen border-b text-center text-lg dark:border-zinc-700 border-gray-300">
            <div className="p-4 text-sm">
                <Badge variant="destructive">In Development</Badge>
                <Link href={"/docs#introduction"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Introduction</p>
                </div>
                </Link>
                <Link href={"/docs#how-it-works"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>How it works?</p>
                </div>
                </Link>
                <Link href={"/docs#colors"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Selecting colors</p>
                </div>
                </Link>
                <Link href={"/docs#theming"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Theming</p>
                </div>
                </Link>
                <Link href={"/docs#upcoming"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>What's to come?</p>
                </div>
                </Link>
                <Link href={"/docs#changelog"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Changelog</p>
                </div>
                </Link>
                <Link href={"/docs#version"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Version</p>
                </div>
                </Link>
            </div>
        </ScrollArea>
    )
}
