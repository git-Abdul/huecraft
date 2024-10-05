"ise client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function DocsList() {
    return (
        <ScrollArea className="w-48 fixed h-screen text-center text-normal dark:border-zinc-700 border-gray-300">
            <div className="p-4 font-inter">
                <Badge variant="destructive">In Development</Badge>

                <Link href={"/blog/1.5"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-3 rounded-md">
                    <p>Version 1.5</p>
                </div>
                </Link>
                <Link href={"/blog/1.4"}>
                <div className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-900 bg-slate-200 hover:bg-slate-300 transition ease-in-out duration-200 p-3 rounded-md">
                    <p>Version 1.4</p>
                </div>
                </Link>
            </div>
        </ScrollArea>
    )
}
