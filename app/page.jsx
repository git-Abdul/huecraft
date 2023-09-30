import { NavBar } from "@/components/navBar"

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="md:text-left text-center m-10">
        <h1 className="md:text-8xl text-7xl font-bold font-outfit mt-20 md:mt-44 mr-48 ml-20">Visualize your <span className="font-borel text-primary">design</span> on the web.</h1>
      </div>
    </main>
  )
}
