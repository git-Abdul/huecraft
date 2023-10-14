"use client"
import { Separator } from "@/components/ui/separator";
import { DocScroll } from "@/components/DocScroll";
import { Button } from "@/components/ui/button";
import { version } from "@/components/version";
import { NavBar } from "@/components/navBar";
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
                        <p className="mt-1 text-zinc-500 mb-6">Colors, hues, palettes, and design elements to choose!</p>
                        <div className="para-container">
                            <p className="mb-6 text-md">
                                When it comes to <strong>selecting colors</strong> for your design, you have a wide range of options. Whether you're aiming for a vibrant and lively palette or a more subdued and elegant combination, the choice of colors plays a crucial role in conveying the message and identity of your project. It's important to consider the psychology of colors, contrast, and harmony to create a visually appealing and effective design.
                            </p>
                            <p className="mb-6 text-md">
                                You can experiment with different hues, shades, and saturation levels to find the perfect color scheme that resonates with your project's goals. Don't forget to consider <strong>accessibility</strong> and ensure that your color choices provide a good reading experience for all users.
                            </p>
                            <p className="mb-6 text-md">
                                In this documentation, you'll find detailed information on how to <strong>select</strong> and apply colors to your design, including tips on creating <strong>accessible</strong> color combinations and choosing the right palettes to make your project stand out.
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="theming">Theming</h1>
                        <p className="mt-1 text-zinc-500 mb-6">Dark mode and Light mode theming.</p>
                        <div className="para-container">
                            <p className="text-md mb-6">
                                In this section, we'll explore the theming options available on HueCraft. We offer <span className="font-semibold">two distinct themes</span> to enhance your design experience:<br /><br />

                                <strong>Dark Mode:</strong><br />
                                When you activate the Dark Mode, the entire user interface will transition into a darker color scheme. This is perfect for working in low-light environments or for those who prefer a sleek, modern look. To switch to Dark Mode, simply click the moon icon in the color picker bar at the bottom of the screen. Colors will be updated in real-time to create a visually appealing and comfortable design experience.

                                <br /><br />

                                <strong>Light Mode:</strong><br />
                                Light Mode offers a brighter and more traditional design. It's ideal for users who prefer a clean and well-lit workspace. By clicking the sun icon in the color picker bar, you can easily switch to Light Mode. Just like with Dark Mode, all elements will update in real-time to ensure a seamless transition.

                                <br /><br />

                                You can easily switch between these themes to suit your working environment and personal preferences. With HueCraft, designing becomes more flexible and tailored to your needs, providing an enjoyable and productive experience.
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="upcoming">What's to come?</h1>
                        <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your desinging easier.</p>
                        <div className="para-container">
                            <p className="text-md mb-6">
                                In this section, we'll take a look at the upcoming features and sections on HueCraft. There are <span className="font-semibold">Three main sections</span> on the site at the moment, but here's what's upcoming for the future of HueCraft:<br /><br />• Templates - More to be added<br />• Font support<br />• Native application <br /><br /> All these upcoming features will be added in the near future!
                            </p>
                        </div>
                        <Separator />
                        <h1 className="font-inter font-bold text-4xl mt-12" id="changelog">Changelog</h1>
                        <p className="mt-1 text-zinc-500 mb-6">All the latest updates, additions and bug fixes featured here.</p>
                        <div className="para-container mb-6">
                            <Link target="_blank" href={"https://github.com/git-Abdul/huecraft/blob/master/Changelog.md"}><Button variant="">Click here to access changelog</Button></Link>
                        </div>
                        <Separator />
                        <h1 className="mb-6 font-inter font-bold text-4xl mt-12" id="version">Version - {version}</h1>
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
                <h1 className="font-inter font-bold text-4xl mt-12" id="colors">Selecting Colors</h1>
                <p className="mt-1 text-zinc-500 mb-6">Colors, hues, palettes, and design elements to choose!</p>
                <div className="para-container">
                    <p className="mb-6 text-md">
                        When it comes to <strong>selecting colors</strong> for your design, you have a wide range of options. Whether you're aiming for a vibrant and lively palette or a more subdued and elegant combination, the choice of colors plays a crucial role in conveying the message and identity of your project. It's important to consider the psychology of colors, contrast, and harmony to create a visually appealing and effective design.
                    </p>
                    <p className="mb-6 text-md">
                        You can experiment with different hues, shades, and saturation levels to find the perfect color scheme that resonates with your project's goals. Don't forget to consider <strong>accessibility</strong> and ensure that your color choices provide a good reading experience for all users.
                    </p>
                    <p className="mb-6 text-md">
                        In this documentation, you'll find detailed information on how to <strong>select</strong> and apply colors to your design, including tips on creating <strong>accessible</strong> color combinations and choosing the right palettes to make your project stand out.
                    </p>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="theming">Theming</h1>
                <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your designing easier.</p>
                <div className="para-container">
                    <p className="text-md mb-6">
                        In this section, we'll explore the theming options available on HueCraft. We offer <span className="font-semibold">two distinct themes</span> to enhance your design experience:<br /><br />

                        <strong>Dark Mode:</strong><br />
                        When you activate the Dark Mode, the entire user interface will transition into a darker color scheme. This is perfect for working in low-light environments or for those who prefer a sleek, modern look. To switch to Dark Mode, simply click the moon icon in the color picker bar at the bottom of the screen. Colors will be updated in real-time to create a visually appealing and comfortable design experience.

                        <br /><br />

                        <strong>Light Mode:</strong><br />
                        Light Mode offers a brighter and more traditional design. It's ideal for users who prefer a clean and well-lit workspace. By clicking the sun icon in the color picker bar, you can easily switch to Light Mode. Just like with Dark Mode, all elements will update in real-time to ensure a seamless transition.

                        <br /><br />

                        You can easily switch between these themes to suit your working environment and personal preferences. With HueCraft, designing becomes more flexible and tailored to your needs, providing an enjoyable and productive experience.
                    </p>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="upcoming">What's to come?</h1>
                <p className="mt-1 text-zinc-500 mb-6">An insight on how this tool makes your desinging easier.</p>
                <div className="para-container">
                    <p className="text-md mb-6">
                        In this section, we'll take a look at the upcoming features and sections on HueCraft. There are <span className="font-semibold">Three main sections</span> on the site at the moment, but here's what's upcoming for the future of HueCraft:<br /><br />• Templates - More to be added<br />• Font support<br />• Native application <br /><br /> All these upcoming features will be added in the near future!
                    </p>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="changelog">Changelog</h1>
                <p className="mt-1 text-zinc-500 mb-6">All the latest updates, additions and bug fixes featured here.</p>
                <div className="para-container">
                    <Link target="_blank" href={"https://github.com/git-Abdul/huecraft/blob/master/Changelog.md"}><Button variant="">Click here to access changelog</Button></Link>
                </div>
                <h1 className="font-inter font-bold text-4xl mt-12" id="version">Version - {version}</h1>
            </div>
        </main>
    );
}
