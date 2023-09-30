import { Button } from "./ui/button"

export function MenuBar() {
    return (
        <>
            <div className="text-center items-center justify-center flex invisible md:visible">
                <div className="flex justify-center gap-2 item-blur mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "200" }}>
                    <button className="py-4 px-7 bg-zinc-900 text-white dark:bg-white dark:text-black rounded-md">Text</button>
                    <button className="py-4 px-7 bg-slate-200 text-black dark:text-white dark:bg-zinc-800 rounded-md">Background</button>
                    <button className="py-4 px-7 bg-primary text-white dark:bg-primary rounded-md">Primary</button>
                    <button className="py-4 px-7 bg-indigo-400 dark:bg-indigo-400 rounded-md">Secondary</button>
                    <button className="py-4 px-7 bg-slate-400 dark:bg-zinc-700 rounded-md">Accent</button>
                </div>
            </div>
        </>
    )
}
