"use client"
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon, ExternalLinkIcon, ArchiveIcon, MoonIcon, RotateCounterClockwiseIcon, SunIcon, CookieIcon } from "@radix-ui/react-icons";
import { ChromePicker } from "react-color";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Footer } from 'flowbite-react';
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
import { Badge } from "@/components/ui/badge";
import { NavBar } from "@/components/navBar";
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
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

export default function Home() {
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
              <div className="rounded-lg w-72 md:h-44 h-20" style={{ backgroundColor: primaryColor }}></div>
              <div className="rounded-lg w-40 md:h-44 h-20 shadow-2xl" style={{ backgroundColor: bgColor }}></div>
            </div>
          </div>
          <div className="md:text-left text-center mx-10 md:mt-44 mt-0">
            <h1 style={{ color: textColor }} className="lg:text-7xl md:text-6xl text-5xl font-bold font-poppins mt-12 md:mt-20 md:mr-44 md:ml-20">
              Visualize your <span className="font-borel" style={{ color: primaryColor }}>design</span> on the <span className="font-effect italic font-medium" style={{ WebkitTextStrokeColor: textColor }}>real</span> web.
            </h1>
            <div className="md:ml-20 mt-6 mb-5">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Badge style={{ border: `1px solid ${accentColor}` }} className="ml-1 px-4 py-1 font-medium font-inter backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30" variant="outline"><div className="flex justify-normal"><p style={{ color: textColor }} className="mr-2">✨ New: <b>Mobile color selection</b> and UI overhaul.</p> <ArrowRightIcon style={{ color: primaryColor }} className="" /></div></Badge>
                </AlertDialogTrigger>
                <AlertDialogContent style={{ backgroundColor: bgColor, backdropFilter: "blur(20px)" }} className="select-none">
                  <AlertDialogHeader>
                    <AlertDialogTitle style={{ color: textColor }}>✨ New update! v1.4</AlertDialogTitle>
                    <AlertDialogDescription>
                      This is the next major update. It adds major UI overhauls and makes the UI more pleasing to the eye, it adds color selection for mobile!! also whilst fixing many bugs and issues that existed from the previous version.
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
            <div className="md:hidden flex justify-center">
              <Badge
                style={{ border: `1px solid ${accentColor}` }}
                className="flex w-max justify-center md:hidden lg:hidden ml-1 py-1 font-medium font-inter backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30" variant="outline"
              >
                <div className="flex justify-normal">
                  <p style={{ color: textColor }} className="mr-2">Rotate your phone to access the color pallete</p>
                  <RotateCounterClockwiseIcon style={{ color: primaryColor }} className="mt-[1px] h-3 w-3" />
                </div>
              </Badge>
            </div>
          </div>
          <div className="md:ml-[122px] md:mt-0 mt-10 mb-12 md:mb-0 flex md:justify-normal justify-center gap-8">
            <Link href={"/"}>
              <button style={{ backgroundColor: primaryColor }} className="shadow-2xl font-inter font-smedium dark:text-white text-white hover:-translate-y-1 rounded-lg py-3 px-4 transition ease-in-out duration-150">Get started</button>
            </Link>
            <Link href={"/docs"}>
              <button style={{ backgroundColor: secondaryColor, color: textColor }} className="font-inter font-medium hover:-translate-y-1 rounded-lg py-3 px-4 transition ease-in-out duration-150 backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">Documentation</button>
            </Link>
          </div>
          <div className="flex md:justify-normal justify-center md:ml-32 mt-4">
            <div className="flex md:justify-normal justify-center">
              <img src="mouse.png" className="h-5 w-5 mt-1 dark:invert"></img>
              <p className="font-poppins text-sm mt-1 ml-1">Scroll to see more sections</p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-4">
          <div style={{ zIndex: 0 }} className="mt-[100px] mx-20 md:block hidden">
            {/* Color boxes */}
            <div className="flex md:justify-normal justify-center gap-2 mt-16 px-8 py-2">
              <Card className="rounded-lg sm:w-6/12 w-4/6 md:h-64 h-20" style={{ backgroundColor: primaryColor }}>
                <p className="font-poppins mt-[110px] text-3xl font-bold text-center" style={{ color: bgColor }}>HueCraft</p>
              </Card>
              <Card className="rounded-lg sm:w-3/12 w-1/6 md:h-64 h-20" style={{ backgroundColor: secondaryColor }}>
                <p className="font-poppins px-10 mt-20 text-3xl font-bold text-center" style={{ color: textColor }}>100%<br /> Free!<br /><span className="text-sm font-normal">forever</span></p>
              </Card>
              <Card className="rounded-lg sm:w-3/12 w-1/6 md:h-64 h-20" style={{ backgroundColor: accentColor }}>
                <p className="font-poppins px-1 mt-20 text-3xl font-bold text-center" style={{ color: secondaryColor }}>Follow<br /> me!<br /><a href="https://github.com/git-Abdul"><span className="text-sm underline underline-offset-[5px] font-normal hover:scale-110 hover:font-normal">Github</span></a></p>
              </Card>
            </div>
            <div className="flex md:justify-normal justify-center gap-2 px-8 py-2">
              <Card className="rounded-lg w-full md:h-44 h-20" style={{ backgroundColor: secondaryColor }}>
                <h1 style={{ color: accentColor }} className="font-borel text-5xl italic text-center mt-20">Colors and Fonts</h1>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:mt-0 mt-20 md:justify-normal md:mx-20 mx-10 md:px-8 px-2 justify-center gap-4">
            <Card style={{ backgroundColor: secondaryColor, color: textColor }} key="1" className="w-full font-inter">
              <CardHeader className="border-b border-dark-gray-300 pb-4 md:mb-0 mb-10">
                <div className="flex items-center">
                  <CookieIcon style={{ color: accentColor }} className="mr-2" />
                  <CardTitle>Cookie Preferences</CardTitle>
                </div>
                <CardDescription>
                  Manage your cookie settings. You can enable or disable different types of cookies below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex justify-between items-start space-y-2">
                  <div>
                    <Label htmlFor="essential">Essential Cookies</Label>
                    <p className="text-dark-gray-500 text-sm">
                      These cookies are necessary for the website to function and cannot be switched off.
                    </p>
                  </div>
                  <Switch style={{ backgroundColor: accentColor }} className="ml-auto" id="essential" />
                </div>
                <div className="flex justify-between items-start space-y-2">
                  <div>
                    <Label htmlFor="analytics">Analytics Cookies</Label>
                    <p className="text-dark-gray-500 text-sm">
                      These cookies allow us to count visits and traffic sources, so we can measure and improve the performance
                      of our site.
                    </p>
                  </div>
                  <Switch style={{ backgroundColor: accentColor }} className="ml-auto" id="analytics" />
                </div>
              </CardContent>
              <div className="border-t border-dark-gray-300 mt-4" />
              <CardFooter>
                <Button style={{ backgroundColor: primaryColor, color: bgColor }} className="ml-auto mt-4" type="submit">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>

            <Card style={{ backgroundColor: secondaryColor, color: textColor }} className="font-inter">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email below to login to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input style={{ outlineColor: accentColor }} className="focus-visible:border-none focus-visible:ring-0" id="email" placeholder="m@example.com" required type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input style={{ outlineColor: accentColor }} className="focus-visible:border-none focus-visible:ring-0" id="password" required type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button style={{ backgroundColor: primaryColor, color: bgColor }} className="w-full">Sign in</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:mx-20 mx-10 md:px-8 px-2 mb-20 font-inter">
            <div className="flex flex-col lg:gap-6 lg:flex-row">
              <div className="flex-1">
                <Card style={{ backgroundColor: secondaryColor, color: textColor }} className="rounded-lg border dark:border-gray-800">
                  <div className="flex items-center gap-4 p-6">
                    <ArchiveIcon style={{ color: accentColor }} className="h-6 w-6" />
                    <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl">My Domains</h1>
                  </div>
                  <div className="border-t dark:border-gray-800">
                    <div className="grid gap-0.5 border-b last:border-0">
                      <div className="grid items-center grid-cols-1 md:grid-cols-[80px_1fr_200px_200px] py-2 px-4">
                        <div className="font-medium md:order-1 md:col-span-2 md:grid md:items-center md:gap-2">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl">example.com</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Expires on Mar 19, 2023</p>
                        </div>
                        <div className="flex items-center justify-end order-1 md:order-2 gap-2">
                          <a
                            className="flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-800 hover:opacity-80 p-2"
                            style={{ borderColor: primaryColor }}
                          >
                            <ExternalLinkIcon className="h-4 w-4 opacity-60" />
                            <span className="sr-only">Open</span>
                          </a>
                        </div>
                      </div>
                      <div className="grid items-center grid-cols-1 md:grid-cols-[80px_1fr_200px_200px] py-2 px-4">
                        <div className="font-medium md:order-1 md:col-span-2 md:grid md:items-center md:gap-2">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl">mysite.net</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Expires on Jan 10, 2024</p>
                        </div>
                        <div className="flex items-center justify-end order-1 md:order-2 gap-2">
                          <a
                            className="flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-800 hover:opacity-80 p-2"
                            style={{ borderColor: primaryColor }}
                          >
                            <ExternalLinkIcon className="h-4 w-4 opacity-60" />
                            <span className="sr-only">Open</span>
                          </a>
                        </div>
                      </div>
                      <div className="grid items-center grid-cols-1 md:grid-cols-[80px_1fr_200px_200px] py-2 mb-4 px-4">
                        <div className="font-medium md:order-1 md:col-span-2 md:grid md:items-center md:gap-2">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl">mydomain.io</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Expires on Sep 30, 2022</p>
                        </div>
                        <div className="flex items-center justify-end order-1 md:order-2 gap-2">
                          <a
                            className="flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-800 hover:opacity-80 p-2"
                            style={{ borderColor: primaryColor }}
                          >
                            <ExternalLinkIcon className="h-4 w-4 opacity-60" />
                            <span className="sr-only">Open</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer container style={{ backgroundColor: secondaryColor }}>
          <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
              <Footer.Brand
                href="https://git-abdul.github.io/huecraft/"
                src="https://git-abdul.github.io/huecraft/favicon.png"
                alt="HueCraft Logo"
                name="HueCraft"
                className="font-outfit"
              />
              <Footer.LinkGroup>
                <Footer.Link href="/docs">Documentation</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </Footer>

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
      </main >
    </body >
  );
}