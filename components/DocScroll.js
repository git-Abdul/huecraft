import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export function DocScroll() {
    return (
        <ScrollArea className="w-48 fixed h-screen border-b text-center text-lg border-l border-r dark:border-zinc-700 border-gray-300">
            <div className="p-4 text-sm">
                <h4 className="text-xl p-2 font-inter font-bold leading-none text-center md:block hidden">Documentation</h4>
                <Badge variant="destructive">In Development</Badge>
                <a href="#introduction">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Introduction</p>
                </div>
                </a>
                <a href="#how-it-works">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>How it works?</p>
                </div>
                </a>
                <a href="#colors">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Selecting colors</p>
                </div>
                </a>
                <a href="#theming">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Theming</p>
                </div>
                </a>
                <a href="#upcoming">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>What's to come?</p>
                </div>
                </a>
                <a href="#changelog">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Changelog</p>
                </div>
                </a>
                <a href="#version">
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                    <p>Version</p>
                </div>
                </a>
            </div>
        </ScrollArea>
    )
}
