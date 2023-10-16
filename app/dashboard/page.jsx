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

export default function Dashboard() {
  const { setTheme } = useTheme();
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
  const [textColor, setTextColor] = useState("#CEC6C6");
  const [bgColor, setBgColor] = useState("#6676A1");
  const [primaryColor, setPrimaryColor] = useState("#8f8fff");
  const [secondaryColor, setSecondaryColor] = useState("#cec6c6");
  const [accentColor, setAccentColor] = useState("#000");

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
    <main>
      <NavBar />
      <Card style={{ backgroundColor: bgColor }} className="mt-20 md:mx-10 sm:mx-2 mx-3">
        <CardHeader>
          <CardTitle><h1 style={{ color: textColor }} className="text-4xl font-inter">Dashboard</h1>
            <CardDescription style={{ color: secondaryColor }} className="font-inter font-thin">A simple dashboard template.</CardDescription>
            <Card className="mt-2 border-none" style={{ backgroundColor: secondaryColor, color: textColor }}>
              <div className="flex gap-2 justify-normal p-4">
                <Avatar className="flex w-7 h-7 mt-1 flex-col right-0">
                  <AvatarImage src="https://github.com/git-Abdul.png" />
                  <AvatarFallback className="text-sm font-inter font-bold dark:text-white text-black">AV</AvatarFallback>
                </Avatar>
                <Button style={{ backgroundColor: primaryColor }} variant="secondary">Actions</Button>
                <Button variant="secondary">GitHub</Button>
                <Button variant="secondary">Security</Button>
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
        <CardFooter className="rounded-lg" style={{ backgroundColor: secondaryColor }}>
          <p className="mt-5 text-sm font-inter" style={{ color: accentColor }}>Thank you for using our dashboard. If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
        </CardFooter>
      </Card>
      <br />
      <br />
      <br />
      <br />

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" size="icon" className="w-[3rem] h-[3rem]">
                <SunIcon className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => applyColor("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyColor("dark")}>Dark</DropdownMenuItem>
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
          <Button variant="secondary" onClick={handleCloseColorPicker} className="mt-2">Close</Button>
        </div>
      )}
    </main>
  )
}
