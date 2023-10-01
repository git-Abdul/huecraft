import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function DocScroll() {
    return (
        <ScrollArea className="w-48 h-screen border-b border-l border-r dark:border-zinc-700 border-gray-300">
            <div className="p-4 text-sm">
                <h4 className="mb-4 text-xl font-medium leading-none md:block hidden">Documentation</h4>
                <div className="mt-6">
                    <a href="#"><p>Introduction</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#how-it-works"><p>How it works?</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#colors"><p>Selecting colors</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#theming"><p>Theming</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#upcoming"><p>What's to come?</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#changelog"><p>Changelog</p></a>
                    <Separator className="my-2"></Separator>
                </div>
                <div className="my-3">
                    <a href="#version"><p>Version</p></a>
                    <Separator className="my-2"></Separator>
                </div>
            </div>
        </ScrollArea>
    )
}
