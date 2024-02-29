"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState } from "react";
import { ArchiveIcon, BarChartIcon, EnvelopeOpenIcon, FaceIcon, MoonIcon, RocketIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ChromePicker } from "react-color";
import { NavBar } from "@/components/navBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
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

export default function Dashboard() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false)
  const data = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ]
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

  const revenue = 29581.56;
  const sales = 23345.25;
  const difference = revenue - sales;
  const profitper = (difference / sales) * 100;
  const profit = profitper.toFixed(2);

  return (
    <body style={{ backgroundColor: bgColor }}>
      <main>
        <NavBar />
        <Card style={{ backgroundColor: bgColor }} className="mt-20 md:mx-10 sm:mx-2 mx-3 border-none shadow-none">
          <CardHeader>
            <CardTitle><h1 style={{ color: textColor }} className="text-4xl font-inter">Dashboard</h1>
              <CardDescription style={{ color: secondaryColor }} className="font-inter font-thin">A simple dashboard template.</CardDescription>
              <Card className="mt-2 border-none" style={{ backgroundColor: secondaryColor, color: textColor }}>
                <div className="flex gap-2 justify-normal p-4">
                  <Avatar className="flex w-7 h-7 mt-1 flex-col right-0">
                    <AvatarImage src="https://github.com/git-Abdul.png" />
                    <AvatarFallback className="text-sm font-inter font-bold dark:text-white text-black">AV</AvatarFallback>
                  </Avatar>
                  <Button style={{ backgroundColor: primaryColor, color: bgColor }} variant="secondary">Actions</Button>
                  <Button variant="secondary" className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">GitHub</Button>
                  <Button variant="secondary" className="backdrop-blur-lg bg-white/10 dark:bg-zinc-900/30">Security</Button>
                </div>
              </Card>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-normal lg:flex-row flex-col gap-3">
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Total Revenue</CardTitle>
                  <BarChartIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>$ {revenue}</CardDescription>
              </Card>
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Total Subscriptions</CardTitle>
                  <EnvelopeOpenIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>+ 21,200</CardDescription>
              </Card>
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Total Sales</CardTitle>
                  <RocketIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>$ {sales}</CardDescription>
              </Card>
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Total Users</CardTitle>
                  <FaceIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>+ 2400</CardDescription>
              </Card>
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Profit Percent</CardTitle>
                  <BarChartIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>{profit}%</CardDescription>
              </Card>
              <Card style={{ backgroundColor: secondaryColor, color: accentColor }} className="flex flex-col gap-2 p-4 border-none font-inter">
                <div className="flex justify-normal gap-2">
                  <CardTitle className="m-1">Items Shipped</CardTitle>
                  <ArchiveIcon className="mt-1" />
                </div>
                <CardDescription className="text-xl font-bold font-inter" style={{ color: accentColor }}>+ 13,445</CardDescription>
              </Card>
            </div>
            <Card className="mt-10 border-none p-4" style={{ backgroundColor: secondaryColor }}>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  <XAxis
                    dataKey="name"
                    stroke={accentColor}
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    className="font-inter"
                  />
                  <YAxis
                    stroke={accentColor}
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    className="font-inter"
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Bar dataKey="total" fill={primaryColor} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </CardContent>
          <Card className="rounded-lg mx-5 p-5" style={{ backgroundColor: secondaryColor }}>
            <p className="text-sm font-inter" style={{ color: accentColor }}>Thank you for using our dashboard. If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
          </Card>
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
  )
}