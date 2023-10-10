"use client"
import { Separator } from "@/components/ui/separator";
import { NavBar } from "@/components/navBar";
import { DocScroll } from "@/components/DocScroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Docs() {
    return (
        <main>
            <NavBar />
            {/*Desktop */}
            <div className="hidden md:flex justify-normal lg:mt-16 md:mt-20 py-2">
                <div className="sm:mr-20">
                    <DocScroll />
                </div>
                <div className="scroll-container">
                    <div className="lg:mx-8 md:mx-0">
                        <h1 className="font-inter font-bold text-4xl mt-12" id="introduction">Introduction</h1>
                        <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                        <div className="para-container">
                            <p className="text-md mb-6">
                                This website is a visually captivating platform that empowers designers and developers to bring their creative visions to life on the web. With an elegant and user-friendly interface, it offers a seamless experience for exploring and customizing design elements. Users can easily adjust text, background, primary, secondary, and accent colors to suit their preferences, thanks to an intuitive color picker. The site also provides comprehensive documentation and resources, ensuring that designers and developers have access to all the information they need. It's a valuable tool for anyone looking to visualize and implement stunning design concepts on the real web.
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="how-it-works">How does it work?</h1>
                        <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your desinging easier.</p>
                        <div className="para-container">
                            <p className="text-md mb-6">
                                In this section, we'll take a look at the available features and sections on HueCraft. There are <span className="font-semibold">Three main sections</span> on the site at the moment, including:<br /><br />• HomeScreen<br />• Templates<br />• Documentations <br /><br /> You can use the color picker bar on the bottom of the screen to change respective colors. On mobile you might have to rotate your phone, if you get the alert to rotate it on the home screen. Colors will be updated in realtime.
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="colors">Selecting Colors</h1>
                        <p className="mt-1 text-zinc-500 mb-6">Colors, hues, palletes and design elements to choose!</p>
                        <div className="para-container">
                            <p className="mb-6 text-md">
                                
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="changelog">Changelog</h1>
                        <p className="mt-1 text-zinc-500 mb-6">All the latest updates, additions and bug fixes featured here.</p>
                        <div className="para-container mb-6">
                            <Link target="_blank" href={"https://github.com/git-Abdul/huecraft/blob/master/Changelog.md"}><Button variant="">Click here to access changelog</Button></Link>
                        </div>
                        <Separator />
                    </div>
                </div>
            </div>
            {/*Mobile */}
            <div className="md:hidden block m-5 mt-20">
                <h1></h1> {/*Here*/}
                <h1 className="font-inter font-bold text-4xl mt-12" id="introduction">Introduction</h1>
                <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                <div className="scroll-container mb-2">
                    <p className="text-md mb-12">
                        This website is a visually captivating platform that empowers designers and developers to bring their creative visions to life on the web. With an elegant and user-friendly interface, it offers a seamless experience for exploring and customizing design elements. Users can easily adjust text, background, primary, secondary, and accent colors to suit their preferences, thanks to an intuitive color picker. The site also provides comprehensive documentation and resources, ensuring that designers and developers have access to all the information they need. It's a valuable tool for anyone looking to visualize and implement stunning design concepts on the real web.
                    </p>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="how-it-works">How does it work?</h1>
                <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your desinging easier.</p>
                <div className="para-container">
                    <p className="text-md mb-6">
                        In this section, we'll take a look at the available features and sections on HueCraft. There are <span className="font-semibold">Three main sections</span> on the site at the moment, including:<br /><br />• HomeScreen<br />• Templates<br />• Documentations <br /><br /> You can use the color picker bar on the bottom of the screen to change respective colors. On mobile you might have to rotate your phone, if you get the alert to rotate it on the home screen. Colors will be updated in realtime.
                    </p>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="changelog">Changelog</h1>
                <p className="mt-1 text-zinc-500 mb-6">All the latest updates, additions and bug fixes featured here.</p>
                <div className="para-container">
                    <Link target="_blank" href={"https://github.com/git-Abdul/huecraft/blob/master/Changelog.md"}><Button variant="">Click here to access changelog</Button></Link>
                </div>
            </div>
        </main>
    );
}
