"use client"
import { Separator } from "@/components/ui/separator";
import { NavBar } from "@/components/navBar";
import { DocScroll } from "@/components/DocScroll";

export default function Docs() {
    return (
        <main>
            <NavBar />
            {/*Desktop */}
            <div className="hidden md:flex">
                <DocScroll />
                <div className="scroll-container">
                    <div className="mx-8">
                        <h1 className="font-inter font-bold text-4xl mt-12">Introduction</h1>
                        <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                        <div className="para-container">
                            <p className="text-md mb-6">
                                This website is a visually captivating platform that empowers designers and developers to bring their creative visions to life on the web. With an elegant and user-friendly interface, it offers a seamless experience for exploring and customizing design elements. Users can easily adjust text, background, primary, secondary, and accent colors to suit their preferences, thanks to an intuitive color picker. The site also provides comprehensive documentation and resources, ensuring that designers and developers have access to all the information they need. It's a valuable tool for anyone looking to visualize and implement stunning design concepts on the real web.
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12">How does it work?</h1>
                        <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your desinging easier.</p>
                        <div className="para-container">
                            <p className="text-md">
                                In this section, we'll take a look at the available features and sections on HueCraft. There are <span className="font-semibold">Three main sections</span> on the site at the moment, including:<br /><br />• HomeScreen<br />• Templates<br />• Documentations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Mobile */}
            <div className="md:hidden block m-5" id="#introduction">
                <h1 className="font-inter font-bold text-4xl mt-12">Introduction</h1>
                <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                <div className="scroll-container mb-2">
                    <p className="text-md mb-12">
                        This website is a visually captivating platform that empowers designers and developers to bring their creative visions to life on the web. With an elegant and user-friendly interface, it offers a seamless experience for exploring and customizing design elements. Users can easily adjust text, background, primary, secondary, and accent colors to suit their preferences, thanks to an intuitive color picker. The site also provides comprehensive documentation and resources, ensuring that designers and developers have access to all the information they need. It's a valuable tool for anyone looking to visualize and implement stunning design concepts on the real web.
                    </p>
                </div>
            </div>
        </main>
    );
}
