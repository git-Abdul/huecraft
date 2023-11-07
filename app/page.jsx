"use client"
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon, InfoCircledIcon, LapTimerIcon, LaptopIcon, MoonIcon, RotateCounterClockwiseIcon, SunIcon } from "@radix-ui/react-icons";
import { ChromePicker } from "react-color";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge";
import { NavBar } from "@/components/navBar";
import { RotateIcons } from "@/components/rotateIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Home() {
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
    <body style={{ backgroundColor: bgColor }}>
      <main>
        <NavBar />
        <div className="mt-32">
          <div style={{ zIndex: 0 }} className="mt-20 md:hidden block">
            {/* Color boxes */}
            <div className="flex justify-center gap-2 mt-16 px-8">
              <div className="rounded-lg w-56 md:h-44 h-20" style={{ backgroundColor: primaryColor }}></div>
              <div className="rounded-lg w-52 md:h-44 h-20" style={{ backgroundColor: secondaryColor }}></div>
              <div className="rounded-lg w-44 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: bgColor }}></div>
              <div className="rounded-lg w-40 md:h-44 h-20" style={{ backgroundColor: accentColor }}></div>
              <div className="rounded-md w-4 md:h-44 h-20" style={{ backgroundColor: textColor }}></div>
            </div>
            <div className="flex justify-center gap-2 px-8 py-2">
              <div className="rounded-lg w-36 md:h-44 h-20" style={{ backgroundColor: accentColor }}></div>
              <div className="rounded-md w-4 md:h-44 h-20" style={{ backgroundColor: textColor }}></div>
              <div className="rounded-lg w-48 md:h-44 h-20" style={{ backgroundColor: secondaryColor }}></div>
              <div className="rounded-lg w-72 md:h-24 h-20" style={{ backgroundColor: primaryColor }}></div>
              <div className="rounded-lg w-40 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: bgColor }}></div>
            </div>
          </div>
          <div className="md:text-left text-center mx-10">
            <h1 style={{ color: textColor }} className="md:text-7xl text-5xl font-bold font-poppins mt-12 md:mt-20 md:mr-44 md:ml-20">
              Visualize your <span className="font-borel" style={{ color: primaryColor }}>design</span> on the <span className="font-effect italic font-medium" style={{ WebkitTextStrokeColor: textColor }}>real</span> web.
            </h1>
            <div className="md:ml-20 mt-6 mb-5">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Badge style={{ border: `1px solid ${accentColor}` }} className="ml-1 px-4 py-1 font-medium font-inter backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30" variant="outline"><div className="flex justify-normal"><p style={{ color: textColor }} className="mr-2">✨ New: Customization, colors, UI changes and more</p> <ArrowRightIcon style={{ color: primaryColor }} className="mt-[1px]" /></div></Badge>
                </AlertDialogTrigger>
                <AlertDialogContent style={{ backgroundColor: bgColor, backdropFilter: "blur(20px)" }} className="select-none">
                  <AlertDialogHeader>
                    <AlertDialogTitle style={{ color: textColor }}>✨ New update! v1.3</AlertDialogTitle>
                    <AlertDialogDescription>
                      This is the next major update. It adds more customization to the page visuals, Users can customize the whole page to their liking and colors from the color picker are used in various places around the site, ever more than before! More information in the changelog.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-none" style={{ backgroundColor: secondaryColor, color: textColor }} >Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        window.open("https://github.com/git-Abdul/huecraft/blob/master/Changelog.md", "_blank");
                      }}
                      style={{ backgroundColor: primaryColor }}
                      className="text-white"
                    >
                      Changelog
                    </AlertDialogAction>

                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <Badge style={{ border: `1px solid ${accentColor}` }} className="md:hidden lg:hidden block ml-1 px-4 py-1 font-medium font-inter backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30" variant="outline"><div className="flex justify-normal"><p style={{ color: textColor }} className="mr-2">Rotate your phone to access the color pallete</p> <RotateCounterClockwiseIcon style={{ color: primaryColor }} className="mt-[1px] h-3 w-3" /></div></Badge>
          </div>
          <div className="md:ml-32 md:mt-0 mt-10 mb-12 md:mb-0 flex md:justify-normal justify-center gap-8">
            <Link href={"/"}>
              <button style={{ backgroundColor: primaryColor }} className="shadow-2xl font-inter font-smedium dark:text-white text-white hover:-translate-y-1 hover:scale-110 rounded-lg py-3 px-4 transition ease-in-out duration-200">Get started</button>
            </Link>
            <Link href={"/docs"}>
              <button style={{ backgroundColor: secondaryColor, color: textColor }} className="font-inter font-medium hover:-translate-y-1 hover:scale-110 rounded-lg py-3 px-4 transition ease-in-out duration-200 backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">Documentation</button>
            </Link>
          </div>
        </div>

        <div style={{ zIndex: 0 }} className="mt-20 md:block hidden">
          {/* Color boxes */}
          <div className="flex justify-center gap-2 mt-16 px-8">
            <div className="rounded-lg w-56 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: primaryColor }}></div>
            <div className="rounded-lg w-52 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: secondaryColor }}></div>
            <div className="rounded-lg w-44 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: bgColor }}></div>
            <div className="rounded-lg w-40 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: accentColor }}></div>
            <div className="rounded-md w-4 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: textColor }}></div>
          </div>
          <div className="flex justify-center gap-2 px-8 py-2">
            <div className="rounded-lg w-36 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: accentColor }}></div>
            <div className="rounded-md w-4 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: textColor }}></div>
            <div className="rounded-lg w-48 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: secondaryColor }}></div>
            <div className="rounded-lg w-72 md:h-24 h-20 shadow-2xl" style={{ backgroundColor: primaryColor }}></div>
            <div className="rounded-lg w-40 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: bgColor }}></div>
          </div>
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