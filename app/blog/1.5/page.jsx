"use client"
import { Separator } from "@/components/ui/separator";
import { DocScroll } from "@/components/DocScroll";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { LayersIcon } from "@radix-ui/react-icons";
import { version } from "@/components/version";
import { NavBar } from "@/components/navBar";
import { ChromePicker } from "react-color";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DownloadIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Version1_5() {
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false)

    const [selectedColor, setSelectedColor] = useState(null);
    const [textColor, setTextColor] = useState("#3d4136");
    const [bgColor, setBgColor] = useState("#E6FFE6");
    const [primaryColor, setPrimaryColor] = useState("#7cb14c");
    const [secondaryColor, setSecondaryColor] = useState("#dfecad");
    const [accentColor, setAccentColor] = useState("#569041");

    const colorPalettes = [
        { background: "#E6FFE6", text: "#3d4136", accent: "#569041", secondary: "#dfecad", primary: "#7cb14c" },
        { background: '#FFFAEB', text: '#202020', accent: "#CF4307", secondary: "#FFF5D6", primary: "#FF8400" },
        { background: '#fbfbfe', text: '#050315', accent: "#433bff", secondary: "#dedcff", primary: "#2f27ce" },
        { background: '#f4f8f7', text: '#050606', accent: "#4D6F6C", secondary: "#8de0d5", primary: "#417970" },
        { background: '#f6feff', text: '#001517', accent: "#9A3EA4", secondary: "#fe69b8", primary: "#02e6fe" },
        { background: '#fdf5f5', text: '#0d0304', accent: "#93df58", secondary: "#e2ea92", primary: "#d62b3e" },
        { background: '#f1fcfd', text: '#03181b', accent: "#9E2F96", secondary: "#b778ed", primary: "#2ed1e4" },
        { background: '#f3f7f8', text: '#0c1314', accent: "#8697b7", secondary: "#a4b4c9", primary: "#609ea0" },
        { background: '#f7f8f5', text: '#13160e', accent: "#9d8bb3", secondary: "#a8b2c6", primary: "#8c9f6d" },
    ];

    const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);

    const handleRandomizeColors = () => {
        setCurrentPaletteIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % colorPalettes.length;
            const currentPalette = colorPalettes[currentPaletteIndex];
            setBgColor(currentPalette.background)
            setTextColor(currentPalette.text)
            setPrimaryColor(currentPalette.primary)
            setSecondaryColor(currentPalette.secondary)
            setAccentColor(currentPalette.accent)
            return nextIndex;
        });
    };

    const textContent = `Text Color: ${textColor}\nBackground Color: ${bgColor}\nPrimary Color: ${primaryColor}\nSecondary Color: ${secondaryColor}\nAccent Color: ${accentColor}`;

    const DownloadFile = () => {
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
                <NavBar txtColor={textColor} secColor={secondaryColor} />
                <div className="hidden md:flex justify-normal gap-1 lg:mt-16 md:mt-20 py-2">
                    {/*Content */}
                    <div className="flex justify-center w-full">
                        <div>
                            <div className="px-5">
                                <h1 className="font-inter font-bold text-5xl mt-20" id="introduction"><span className="text-[52px]">1.5:</span> Apple Green, Blogfolio</h1>
                                <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                            </div>
                            <div className="para-container px-5">
                                <p className="text-md mb-6">
                                    The website has embraced a bold new look, transitioning from the warm, comforting tones of autumn orange to a fresh and vibrant green color scheme. This shift represents more than just a change in aesthetics; it signals a renewal of the platform’s identity, infusing it with a sense of growth, energy, and forward momentum. The green palette, associated with nature, balance, and innovation, transforms the user experience by creating an environment that feels both lively and calming. This evolution in design aims to inspire users, encouraging them to explore the site with a renewed sense of curiosity and engagement. The move from orange to green reflects a strategic decision to align the visual experience with the platform’s ongoing commitment to progress and creativity.
                                </p>
                            </div>
                            <Separator />
                            <div className="mt-16 flex justify-center">
                                <Carousel className="w-full max-w-xs flex justify-center">
                                    <CarouselContent className="">
                                        <CarouselItem>
                                            <div className="p-10">
                                                <Card style={{ backgroundColor: secondaryColor }}>
                                                    <CardContent className="flex aspect-square items-center justify-center p-1">
                                                        <img src="/green_heart.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="p-10">
                                                <Card style={{ backgroundColor: secondaryColor }}>
                                                    <CardContent className="flex aspect-square items-center justify-center p-1">
                                                        <img src="/green_apple.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="p-10">
                                                <Card style={{ backgroundColor: secondaryColor }}>
                                                    <CardContent className="flex aspect-square items-center justify-center p-1">
                                                        <img src="/green_book.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                        <CarouselItem>
                                            <div className="p-10">
                                                <Card style={{ backgroundColor: secondaryColor }}>
                                                    <CardContent className="flex aspect-square items-center justify-center p-1">
                                                        <img src="/green_salad.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    </CarouselContent>
                                    <CarouselPrevious style={{ color: accentColor, backgroundColor: secondaryColor }} />
                                    <CarouselNext style={{ color: accentColor, backgroundColor: secondaryColor }} />
                                </Carousel>
                            </div>
                            <Separator />
                            <div className="para-container px-5 mt-10 md:-mb-[1000px]">
                                <p className="text-md">
                                    The website's update includes the introduction of a sleek new Blogfolio page, designed to showcase content in a more dynamic and user-friendly manner. This modernized page combines the best elements of a blog and portfolio, offering a streamlined space for sharing ideas, projects, and updates. Alongside this addition, the old and outdated documentation page has been removed, clearing away clutter and improving the overall navigational experience. The elimination of this unnecessary content not only declutters the site but also ensures that users can focus on the most relevant and engaging material. The Blogfolio page serves as a fresh, engaging hub for both creators and readers, reflecting the platform’s commitment to delivering valuable and up-to-date content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:invisible visible">
                    <div className="px-5">
                        <h1 className="font-inter font-bold md:text-5xl text-3xl md:mt-20 mt-32" id="introduction"><span className="md:text-[52px] text-[30px]">1.5:</span> Apple Green, Blogfolio</h1>
                        <p className="mt-1 text-zinc-500 mb-6">HueCraft - A designer's dream.</p>
                    </div>
                    <div className="para-container px-5">
                        <p className="text-md mb-6">
                            The website has embraced a bold new look, transitioning from the warm, comforting tones of autumn orange to a fresh and vibrant green color scheme. This shift represents more than just a change in aesthetics; it signals a renewal of the platform’s identity, infusing it with a sense of growth, energy, and forward momentum. The green palette, associated with nature, balance, and innovation, transforms the user experience by creating an environment that feels both lively and calming. This evolution in design aims to inspire users, encouraging them to explore the site with a renewed sense of curiosity and engagement. The move from orange to green reflects a strategic decision to align the visual experience with the platform’s ongoing commitment to progress and creativity.
                        </p>
                    </div>
                    <div className="flex justify-center -mt-32">
                        <Carousel>
                            <CarouselContent className="-mx-10">
                                <CarouselItem className="flex aspect-square items-center justify-center p-1">
                                    <div className="p-2">
                                        <Card style={{ backgroundColor: secondaryColor }}>
                                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                                <img src="/green_heart.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="flex aspect-square items-center justify-center p-1">
                                    <div className="p-2">
                                        <Card style={{ backgroundColor: secondaryColor }}>
                                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                                <img src="/green_salad.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="flex aspect-square items-center justify-center p-1">
                                    <div className="p-2">
                                        <Card style={{ backgroundColor: secondaryColor }}>
                                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                                <img src="/green_apple.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="flex aspect-square items-center justify-center p-1">
                                    <div className="p-2">
                                        <Card style={{ backgroundColor: secondaryColor }}>
                                            <CardContent className="flex aspect-square items-center justify-center p-1">
                                                <img src="/green_book.svg" className="md:h-36 md:w-36 h-32 w-32" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                    <div className="para-container px-5 -mt-20 mb-20">
                        <p className="text-md">
                            The website's update includes the introduction of a sleek new Blogfolio page, designed to showcase content in a more dynamic and user-friendly manner. This modernized page combines the best elements of a blog and portfolio, offering a streamlined space for sharing ideas, projects, and updates. Alongside this addition, the old and outdated documentation page has been removed, clearing away clutter and improving the overall navigational experience. The elimination of this unnecessary content not only declutters the site but also ensures that users can focus on the most relevant and engaging material. The Blogfolio page serves as a fresh, engaging hub for both creators and readers, reflecting the platform’s commitment to delivering valuable and up-to-date content.
                        </p>
                    </div>
                </div>

                {/**Mobile MenuBar */}
                <div className="text-center items-center justify-center flex md:invisible visible">
                    <div className="w-full backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-800/30 p-2 fixed mt-20 bottom-0 rounded-md" style={{ zIndex: "5" }}>
                        <div className="grid grid-cols-1 justify-center gap-2 font-poppins w-full mb-[8px]">
                            <Button
                                className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                style={{ backgroundColor: bgColor }}
                                onClick={handleRandomizeColors}
                            >
                                <LayersIcon style={{ fill: accentColor, color: accentColor }} className="h-[20px] w-[20px]" />
                                <span className="sr-only">Randomize pallete</span>
                            </Button>
                        </div>
                        <div className="grid w-full grid-cols-2 justify-center gap-2 font-poppins ">
                            <Drawer className="backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-800/30">
                                <DrawerTrigger asChild>
                                    <Button
                                        className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        Colors
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <div className="mx-auto w-full max-w-sm">
                                        <DrawerHeader>
                                            <DrawerTitle>Color Picker</DrawerTitle>
                                            <DrawerDescription>Choose your own style and theme!</DrawerDescription>
                                        </DrawerHeader>
                                        <div className="visible text-center w-full">
                                            <div className="grid grid-cols-1 w-full justify-center gap-1 font-poppins backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-800/30 p-2 bottom-0 mb-5 rounded-md" style={{ zIndex: "5" }}>
                                                {/* Color buttons */}
                                                <DrawerClose asChild>
                                                    <Button
                                                        className="py-6 w-full px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                                        style={{ backgroundColor: "#202020", color: "#fff" }}
                                                        onClick={() => setSelectedColor("text")}
                                                    >
                                                        Text
                                                    </Button>
                                                </DrawerClose>
                                                <DrawerClose asChild>
                                                    <Button
                                                        className="py-6 w-full px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                                        style={{ backgroundColor: bgColor }}
                                                        onClick={() => setSelectedColor("bg")}
                                                    >
                                                        Background
                                                    </Button>
                                                </DrawerClose>
                                                <DrawerClose asChild>
                                                    <Button
                                                        className="py-6 w-full px-5 text-sm dark:text-white transition-all ease-in hover:ring hover:ring-gray-400"
                                                        style={{ backgroundColor: primaryColor }}
                                                        onClick={() => setSelectedColor("primary")}
                                                    >
                                                        Primary
                                                    </Button>
                                                </DrawerClose>
                                                <DrawerClose asChild>
                                                    <Button
                                                        className="py-6 w-full px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                                        style={{ backgroundColor: secondaryColor }}
                                                        onClick={() => setSelectedColor("secondary")}
                                                    >
                                                        Secondary
                                                    </Button>
                                                </DrawerClose>
                                                <DrawerClose asChild>
                                                    <Button
                                                        className="py-6 w-full px-5 text-sm dark:text-white transition-all ease-in hover:ring hover:ring-gray-400"
                                                        style={{ backgroundColor: accentColor }}
                                                        onClick={() => setSelectedColor("accent")}
                                                    >
                                                        Accent
                                                    </Button>
                                                </DrawerClose>
                                            </div>
                                        </div>
                                        <DrawerFooter>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Close</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </DrawerContent>
                            </Drawer>

                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button
                                        className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                                        style={{ backgroundColor: bgColor }}
                                    >
                                        <DownloadIcon style={{ color: accentColor }} className="h-[20px] w-[20px] rotate-0 scale-100 transition-all" />
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Export Colors</DrawerTitle>
                                        <DrawerDescription>Export all your colors in a single file</DrawerDescription>
                                    </DrawerHeader>
                                    <div className="text-left h-max rounded-md font-mono backdrop-blur bg-gray-500/10 dark:bg-zinc-900/30 mx-2 p-5">
                                        <p>Text Color: {textColor}<br />Background Color: {bgColor}<br />Primary Color: {primaryColor}<br />Secondary Color: {secondaryColor}<br />Accent Color:{accentColor}</p>
                                    </div>
                                    <DrawerFooter>
                                        <Button onClick={DownloadFile} style={{ backgroundColor: primaryColor, color: bgColor }}>Export</Button>
                                        <DrawerClose asChild>
                                            <Button variant="outline">Close</Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>

                {/* MenuBar */}
                <div className="text-center items-center justify-center flex invisible md:visible">
                    <div className="flex justify-center gap-2 font-poppins backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-800/30 mx-32 p-2 fixed mt-20 bottom-0 mb-5 rounded-md" style={{ zIndex: "5" }}>
                        {/* Color buttons */}
                        <Button
                            className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: "#202020", color: "#fff" }}
                            onClick={() => setSelectedColor("text")}
                        >
                            Text
                        </Button>
                        <Button
                            className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: bgColor }}
                            onClick={() => setSelectedColor("bg")}
                        >
                            Background
                        </Button>
                        <Button
                            className="py-6 px-5 text-sm dark:text-white transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: primaryColor }}
                            onClick={() => setSelectedColor("primary")}
                        >
                            Primary
                        </Button>
                        <Button
                            className="py-6 px-5 text-sm dark:text-white text-black transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: secondaryColor }}
                            onClick={() => setSelectedColor("secondary")}
                        >
                            Secondary
                        </Button>
                        <Button
                            className="py-6 px-5 text-sm dark:text-white transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: accentColor }}
                            onClick={() => setSelectedColor("accent")}
                        >
                            Accent
                        </Button>

                        <hr className="w-0.5 rounded-lg h-11 outline-none bg-gray-800 mt-[1px] ml-2 -mr-2" />
                        <Dialog open={open} onOpenChange={setOpen} style={{ backgroundColor: bgColor }}>
                            <DialogTrigger>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Button
                                                className="py-6 ml-2 text-sm dark:text-white transition-all ease-in hover:ring hover:ring-gray-400"
                                                style={{ backgroundColor: secondaryColor }}
                                            >
                                                <Button
                                                    className="text-md w-[3rem] h-[3rem]"
                                                    size="icon"
                                                    variant="link"
                                                >
                                                    <DownloadIcon style={{ color: accentColor }} className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all" />
                                                </Button>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent style={{ color: textColor }}>
                                            <p>Export colors</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </DialogTrigger>
                            <DialogContent style={{ backgroundColor: bgColor }} className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Export Colors</DialogTitle>
                                    <DialogDescription>
                                        Export your colors in a single file
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="text-left rounded-md font-mono backdrop-blur bg-gray-500/10 dark:bg-zinc-900/30 w-fit p-5 mx-10">
                                    <p>{textContent}</p>
                                </div>
                                <DialogFooter asChild>
                                    <DialogClose asChild>
                                        <Button variant="outline" >Close</Button>
                                    </DialogClose>
                                    <Button style={{ backgroundColor: primaryColor, color: bgColor }} className="transition-all ease-in hover:ring hover:ring-gray-400" onClick={DownloadFile}>Export</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        {/* Randomize colors button */}
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button
                                        className="py-6 px-0 text-sm dark:text-white outline-none transition-all ease-in hover:ring hover:ring-gray-400"
                                        style={{ backgroundColor: secondaryColor }}
                                        onClick={handleRandomizeColors}
                                    >
                                        <Button variant="link" size="icon" className="w-[3rem] h-[3rem]" onClick={handleRandomizeColors}>
                                            <LayersIcon style={{ fill: accentColor, color: accentColor }} height={32} width={32} />
                                            <span className="sr-only">Randomize pallete</span>
                                        </Button>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent style={{ color: textColor }}>
                                    <p>Randomize colors</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <Button
                            className="py-6 px-0 text-sm dark:text-white outline-none transition-all ease-in hover:ring hover:ring-gray-400"
                            style={{ backgroundColor: secondaryColor }}
                        >
                            <DropdownMenu>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="link" size="icon" className="w-[3rem] h-[3rem] mt-[2px]">
                                                    <SunIcon style={{ color: accentColor }} className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                    <MoonIcon style={{ color: accentColor }} className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                    <span className="sr-only">Toggle theme</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                        </TooltipTrigger>
                                        <TooltipContent style={{ color: textColor }}>
                                            <p>Toggle Theme</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <DropdownMenuContent className="backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-900/30">
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
                        </Button>
                    </div>
                </div>

                {
                    selectedColor && (
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
                            <Button style={{ backgroundColor: secondaryColor }} variant="secondary" onClick={handleCloseColorPicker} className="mt-2 transition-all ease-in hover:ring hover:ring-gray-400">Close</Button>
                        </div>
                    )
                }
            </main>
        </body>
    );
}
