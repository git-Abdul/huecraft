"use client"
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ChromePicker } from "react-color";
import { NavBar } from "@/components/navBar";
import { SunIcon, MoonIcon, TwitterLogoIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { DownloadIcon, LapTimerIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
  DialogClose
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Page() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(null);
  const [textColor, setTextColor] = useState("#202020");
  const [bgColor, setBgColor] = useState("#FFFAEB");
  const [primaryColor, setPrimaryColor] = useState("#FF8400");
  const [secondaryColor, setSecondaryColor] = useState("#FFF5D6");
  const [accentColor, setAccentColor] = useState("#CF4307");

  const textContent = `Text Color: ${textColor}\nBackground Color: ${bgColor}\nPrimary Color: ${primaryColor}\nSecondary Color: ${secondaryColor}\nAccent Color: ${accentColor}`;;

  const DownloadFile = () => {
    const blob = new Blob([textContent], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'HueCraftColors.txt';
    a.click();

    URL.revokeObjectURL(url);
  };

  const applyColor = (color, type) => {
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

    setTheme(color === "dark" ? "dark" : "light");
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
        <Card className="md:p-10 p-3 mt-20 md:mx-10 mx-2 mb-10 border-none shadow-none" style={{ backgroundColor: bgColor }}>
          <CardTitle><h1 style={{ color: textColor }} className="lg:text-7xl md:texl-5xl text-5xl font-bold font-bridge text-center md:mt-10 mt-5">Exclusive Blog Content</h1></CardTitle>
          <CardDescription><h1 className="text-center mt-2 text-lg font-inter font-medium">Content for content lovers, color testers, and font enthusiasts.</h1></CardDescription>
          <div className="flex justify-center items-center">
            <div
              className="linear-gradient w-4/5 lg:h-96 md:h-80 h-60 md:mx-10 mx-2 rounded-lg mt-10"
              style={{
                background: `linear-gradient(${primaryColor}, ${secondaryColor})`
              }}
            ></div>
          </div>
          <div className="text-left" style={{ color: textColor }}>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2 mt-10">"Exploring the Wonders of Underwater Photography"</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Have you ever wondered what lies beneath the surface of the world's oceans, seas, and rivers? The underwater world is a mesmerizing realm, filled with stunning marine life, colorful coral reefs, and mysterious shipwrecks. For those with a passion for both photography and the deep blue, underwater photography is a fascinating and rewarding pursuit.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">Capturing the Beauty Below</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Underwater photography allows us to document the beauty and diversity of aquatic life, and it provides a unique perspective that's unlike any other form of photography. From the tranquil elegance of a sea turtle gliding through crystal-clear waters to the vibrant, alien-like colors of a coral reef teeming with fish, underwater photography enables us to glimpse a world that's often hidden from view.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">The Essentials of Underwater Photography</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Before embarking on your underwater photography journey, there are some essential tools and techniques to consider. Waterproof camera housings, specialized lenses, and proper lighting equipment are just a few of the items that can make a significant difference in the quality of your underwater shots. Additionally, mastering buoyancy control and understanding the unique challenges of shooting underwater are crucial skills for any aspiring underwater photographer.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">Conclusion</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Underwater photography is a captivating and challenging niche within the photography world. It allows us to capture the wonders of the underwater world and promote marine conservation. If you're passionate about both photography and the oceans, consider taking the plunge into the world of underwater photography. It's an opportunity to explore a new dimension of art and nature while contributing to the preservation of our planet's most precious resource.</p>
            <Button className="mx-10 m-2 text-xl font-inter py-8 px-6 font-bold transition ease-in-out hover:scale-110" style={{ backgroundColor: primaryColor, color: textColor }}><span><TwitterLogoIcon className="w-6 h-6 mr-3" /></span> Share this on Twitter</Button>
          </div>
        </Card>
        <br />
        <br />
        <br />
        <br />
        {/**Mobile MenuBar */}
        <div className="text-center items-center justify-center flex md:invisible visible">
          <div className="grid w-full grid-cols-2 justify-center gap-2 font-poppins backdrop-blur-lg bg-gray-500/10 dark:bg-zinc-800/30 p-2 fixed mt-20 bottom-0 rounded-md" style={{ zIndex: "5" }}>
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
                  <DownloadIcon className="h-[16px] w-[16px] rotate-0 scale-100 transition-all" />
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

            <Button
              className="py-6 px-0 text-sm dark:text-white outline-none transition-all ease-in hover:ring hover:ring-gray-400"
              style={{ backgroundColor: secondaryColor }}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="link" size="icon" className="w-[3rem] h-[3rem]">
                    <SunIcon style={{ color: accentColor }} className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon style={{ color: accentColor }} className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
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
