"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState } from "react";
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
import { DownloadIcon, InfoCircledIcon, LapTimerIcon } from "@radix-ui/react-icons";
import { ArchiveIcon, BarChartIcon, EnvelopeOpenIcon, FaceIcon, MoonIcon, RocketIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ChromePicker } from "react-color";
import { NavBar } from "@/components/navBar"

export default function Pricing() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [open, setOpen] = useState(false)
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
    document.body.style.setProperty("--bg-color", bgColor);
    document.body.style.setProperty("--text-color", textColor);
    document.body.style.setProperty("--primary-color", primaryColor);
    document.body.style.setProperty("--secondary-color", secondaryColor);
    document.body.style.setProperty("--accent-color", accentColor);

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

        <h1 style={{ color: textColor }} className="select-none text-center md:text-5xl text-4xl mb-10 mt-32 sm:mb-142 md:mb-0 lg:mb-0 font-inter font-bold">Plans and Pricing</h1>
        <section className="font-inter select-none min-h-screen w-full flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <div style={{ backgroundColor: secondaryColor, color: textColor }} className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                <div>
                  <h3 className="text-2xl font-bold text-center">Basic</h3>
                  <div className="mt-4 text-center" style={{ color: accentColor }}>
                    <span className="text-4xl font-bold">$29</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className="text-xs"
                          style={{ color: secondaryColor }}
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Monthly sneaker box delivered
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Upto 5% Off on all our products
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button className="w-full" style={{ backgroundColor: primaryColor }}>Get Started</Button>
                </div>
              </div>
              <div style={{ backgroundColor: secondaryColor, borderColor: primaryColor, color: textColor }} className="relative flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border">
                <div style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }} className="px-3 py-1 text-sm text-black rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-center">Pro</h3>
                  <div style={{ color: accentColor }} className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                    <span className="text-4xl font-bold">$59</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Monthly sneaker box delivered
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Merchandise included
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Upto 10% Off on all our products
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }} className="w-full text-black">Get Started</Button>
                </div>
              </div>
              <div style={{ backgroundColor: secondaryColor, color: textColor }} className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
                <div>
                  <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                  <div style={{ color: accentColor }} className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                    <span className="text-4xl font-bold">$99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Monthly sneaker box delivered
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Merchandise included
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Upto 20% Off on all our products
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Sneaker Collaboration
                    </li>
                    <li className="flex items-center">
                      <span className="rounded-full mr-2 p-1" style={{ backgroundColor: primaryColor }}>
                        <svg
                          className=" text-white text-xs"
                          fill="none"
                          height="24"
                          style={{ color: secondaryColor }}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Dedicated Support and Warranty
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Button style={{ backgroundColor: primaryColor }} className="w-full">Get Started</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
  )
}
