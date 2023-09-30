import { NavBar } from "@/components/navBar"
import { MenuBar } from "@/components/menuBar"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="md:text-left text-center m-10">
        <h1 className="md:text-7xl text-5xl font-bold font-poppins mt-32 md:mt-20 md:mr-44 md:ml-20">Visualize your <span className="font-borel text-primary">design</span> on the <span className="font-effect">real</span> web.</h1>
      </div>
      <div className="md:ml-32 md:mt-0 mt-20 flex md:justify-normal justify-center gap-10">
        <Link href={"/"}>
          <button className="dark:bg-zinc-700 dark:text-white bg-slate-300 hover:bg-slate-400 text-black rounded-lg py-3 px-4 dark:hover:bg-zinc-800 transition ease-in-out duration-200">Get started</button>
        </Link>
        <Link href={"/docs"}>
          <button className="border dark:border-zinc-700 dark:hover:border-zinc-800 border-slate-500 hover:boder-slate-6 00 dark:text-white text-black rounded-lg py-3 px-4 transition ease-in-out duration-200">What is this about?</button>
        </Link>
      </div>
      <MenuBar />
    </main>
  )
}
