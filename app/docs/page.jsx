"use client"
import { Separator } from "@/components/ui/separator";
import { DocScroll } from "@/components/DocScroll";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { version } from "@/components/version";
import { NavBar } from "@/components/navBar";
import { ChromePicker } from "react-color";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ArrowRightIcon, DownloadIcon, InfoCircledIcon, LapTimerIcon, LaptopIcon, MoonIcon, RotateCounterClockwiseIcon, SunIcon } from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Docs() {
    const { setTheme } = useTheme();

    const [selectedColor, setSelectedColor] = useState(null);
    const [textColor, setTextColor] = useState("#202020");
    const [bgColor, setBgColor] = useState("#FFFAEB");
    const [primaryColor, setPrimaryColor] = useState("#FF8400");
    const [secondaryColor, setSecondaryColor] = useState("#FFF5D6");
    const [accentColor, setAccentColor] = useState("#CF4307");

    const DownloadFile = () => {
        const textContent = `Text Color: ${textColor}\nBackground Color: ${bgColor}\nPrimary Color: ${primaryColor}\nSecondary Color: ${secondaryColor}\nAccent Color: ${accentColor}`;;

        const blob = new Blob([textContent], { type: 'text/plain' });

        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'HueCraftColors.txt';
        a.click();

        URL.revokeObjectURL(url);
    };

    const handleColorChange = (color, type) => {
        if (type === "text") {
            setTextColor(color.hex);
        } else if (type === "bg") {
            setBgColor(color.hex);
        } else if (type === "primary") {
            setPrimaryColor(color.hex);
        } else if (type === "secondary") {
            setSecondaryColor(color.hex);
        } else if (type === "accent") {
            setAccentColor(color.hex);
        }
    };

    const handleCloseColorPicker = () => {
        setSelectedColor(null);
    };

    return (
        <body style={{ backgroundColor: bgColor, color: textColor }}>
            <main>
                <NavBar />
                {/*Desktop */}
                <div className="hidden md:flex justify-normal lg:mt-16 md:mt-20 py-2">
                    <div className="sm:mr-20">
                        <ScrollArea className="w-48 fixed h-screen text-center text-lg border-r dark:border-zinc-700 border-gray-300">
                            <div className="p-4 text-sm">
                                <h4 className="text-xl p-2 font-inter font-bold leading-none text-center md:block hidden">Documentation</h4>
                                <Link href={"/docs#introduction"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>Introduction</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#how-it-works"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>How it works?</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#colors"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>Selecting colors</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#theming"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>Theming</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#upcoming"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>What's to come?</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#changelog"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>Changelog</p>
                                    </div>
                                </Link>
                                <Link href={"/docs#version"}>
                                    <div style={{ backgroundColor: secondaryColor }} className="mt-6 dark:hover:bg-zinc-800 dark:bg-zinc-800 bg-slate-300 hover:bg-slate-300 transition ease-in-out duration-200 p-1 rounded-lg">
                                        <p>Version</p>
                                    </div>
                                </Link>
                            </div>
                        </ScrollArea>
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
                                <Link target="_blank" href={"https://github.com/git-Abdul/huecraft/blob/master/Changelog.md"}><Button style={{ backgroundColor: primaryColor }}>Click here to access changelog</Button></Link>
                            </div>
                            <Separator />
                            <h1 className="mb-32 font-inter font-bold text-4xl mt-12" id="version">Version - {version}</h1>
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
                {/* MenuBar */}
                <div className="text-center items-center justify-center flex invisible md:visible">
                    <div className="flex justify-center gap-2 font-poppins backdrop-blur-lg bg-white/10 dark:bg-zinc-800/30 mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "5" }}>
                        {/* Color buttons */}
                        <Button
                            className="py-6 px-7 text-md dark:text-white text-black"
                            style={{ backgroundColor: "#202020", color: "#fff" }}
                            onClick={() => setSelectedColor("text")}
                        >
                            Text
                        </Button>
                        <Button
                            className="py-6 px-7 text-md dark:text-white"
                            style={{ backgroundColor: bgColor }}
                            onClick={() => setSelectedColor("bg")}
                        >
                            Background
                        </Button>
                        <Button
                            className="py-6 px-7 text-md dark:text-white"
                            style={{ backgroundColor: primaryColor }}
                            onClick={() => setSelectedColor("primary")}
                        >
                            Primary
                        </Button>
                        <Button
                            className="py-6 px-7 text-md dark:text-white"
                            style={{ backgroundColor: secondaryColor }}
                            onClick={() => setSelectedColor("secondary")}
                        >
                            Secondary
                        </Button>
                        <Button
                            className="py-6 px-7 text-md dark:text-white"
                            style={{ backgroundColor: accentColor }}
                            onClick={() => setSelectedColor("accent")}
                        >
                            Accent
                        </Button>

                        {/* Theme dropdown */}
                        <hr className="w-0.5 rounded-lg h-12 bg-gray-400" />
                        <HoverCard className="font-inter">
                            <Button
                                className="-mt-3 pr-10 pl-6 text-md"
                                size="icon"
                                variant="link"
                                onClick={DownloadFile}
                            >
                                <HoverCardTrigger>
                                    <DownloadIcon className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all" />
                                </HoverCardTrigger>
                                <HoverCardContent className="font-inter backdrop-blur-lg bg-white/50 dark:bg-zinc-900/30">
                                    <div className="flex justify-normal">
                                        <InfoCircledIcon />
                                        <p className="font-medium">Click this to download your colors.</p>
                                    </div>
                                </HoverCardContent>
                            </Button>
                        </HoverCard>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="link" size="icon" className="w-[3rem] h-[3rem]">
                                    <SunIcon className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="backdrop-blur-lg bg-white/50 dark:bg-zinc-900/30">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <SunIcon className="mr-2 h-4 w-4" />
                                    <span className="font-inter">Light</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <MoonIcon className="mr-2 h-4 w-4" />
                                    <span className="font-inter">Dark</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {selectedColor && (
                    <div className="p-3 rounded-lg backdrop-blur-lg bg-white/10 dark:bg-zinc-800/30" style={{ position: "absolute", top: "100px", left: "50%", transform: "translateX(-50%)", position: "fixed", top: "calc(50% - 150px)", left: "50%", transform: "translateX(-50%)", zIndex: "200" }}>
                        <ChromePicker
                            color={
                                selectedColor === "text"
                                    ? textColor
                                    : selectedColor === "bg"
                                        ? bgColor
                                        : selectedColor === "primary"
                                            ? primaryColor
                                            : selectedColor === "secondary"
                                                ? secondaryColor
                                                : accentColor
                            }
                            onChange={(color) => handleColorChange(color, selectedColor)}
                        />
                        <Button style={{ backgroundColor: secondaryColor }} variant="secondary" onClick={handleCloseColorPicker} className="mt-2">Close</Button>
                    </div>
                )}
            </main>
        </body>
    );
}
