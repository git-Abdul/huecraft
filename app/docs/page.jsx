import { NavBar } from "@/components/navBar"
import { MenuBar } from "@/components/menuBar"

export default function page() {
    return (
        <main>
            <NavBar />
            <MenuBar />
            <h1 className="mt-20 font-outfit font-bold text-5xl md:text-8xl text-center cSoon">Coming <span className="font-borel italic text-primary">soon.</span></h1>
        </main>
    )
}
