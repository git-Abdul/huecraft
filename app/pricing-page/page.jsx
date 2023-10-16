"use client"
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
import { NavBar } from "@/components/navBar"

export default function Pricing() {
  const { setTheme } = useTheme();
  const [selectedColor, setSelectedColor] = useState(null);
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#F9EADC");
  const [primaryColor, setPrimaryColor] = useState("#237ECD");
  const [secondaryColor, setSecondaryColor] = useState("#D7BEF4");
  const [accentColor, setAccentColor] = useState("#5C5757");

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
    <main>
      <NavBar />

      <h1 className="select-none text-center text-4xl mt-32 sm:mb-142 md:mb-0 lg:mb-0 font-inter font-bold">Plans and Pricing</h1>
      <section className="font-inter select-none min-h-screen w-full flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
            <div style={{ backgroundColor: bgColor, color: textColor }} className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
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
            <div style={{ backgroundColor: bgColor, borderColor: primaryColor, color: textColor }} className="relative flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border">
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
            <div style={{ backgroundColor: bgColor, color: textColor }} className="flex flex-col p-6 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
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
