"use client"
import { NavBar } from "@/components/navBar"
import { useState } from "react";
import { RotateIcons } from "@/components/rotateIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { SketchPicker, ChromePicker } from "react-color";
import Link from "next/link";

export default function Home() {
  const { setTheme } = useTheme();

  const [selectedColor, setSelectedColor] = useState(null);
  const [textColor, setTextColor] = useState("#fff");
  const [bgColor, setBgColor] = useState("#219ebc");
  const [primaryColor, setPrimaryColor] = useState("#023e8a");
  const [secondaryColor, setSecondaryColor] = useState("#0077b6");
  const [accentColor, setAccentColor] = useState("#0096c7");

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


  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handleBgColorChange = (color) => {
    setBgColor(color.hex);
  };

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
  };

  const handleSecondaryColorChange = (color) => {
    setSecondaryColor(color.hex);
  };

  const handleAccentColorChange = (color) => {
    setAccentColor(color.hex);
  };
  return (
    <main>
      <NavBar />
      <div>
        <div className="md:text-left text-center m-10">
          <h1 className="md:text-7xl text-5xl font-bold font-poppins mt-32 md:mt-20 md:mr-44 md:ml-20">Visualize your <span className="font-borel" style={{ color: accentColor }}>design</span> on the <span className="font-effect">real</span> web.</h1>
          <div className="mt-10 md:hidden lg:hidden block">
            <div className="flex justify-center items-center gap-3">
              <p className="md:mr-44 md:ml-20 text-xl text-zinc-400">Rotate your phone</p>
              <RotateIcons />
            </div>
          </div>
        </div>
        <div className="md:ml-32 md:mt-0 mt-20 flex md:justify-normal justify-center gap-8">
          <Link href={"/"}>
            <button style={{ backgroundColor: secondaryColor }} className="font-medium dark:text-white text-white hover:-translate-y-1 hover:scale-110 rounded-lg py-3 px-4 transition ease-in-out duration-200">Get started</button>
          </Link>
          <Link href={"/docs"}>
            <button className="border font-medium dark:border-zinc-700 dark:hover:border-zinc-800 border-slate-500 hover:boder-slate-600 dark:text-white text-black hover:-translate-y-1 hover:scale-110 rounded-lg py-3 px-4 transition ease-in-out duration-200">Documentation</button>
          </Link>
        </div>
      </div>

      <div style={{ zIndex: 0 }} className="mt-20">
        <div className="flex justify-center gap-2 mt-16 px-8">
          <div className="rounded-lg w-48 md:h-44 h-20" style={{ backgroundColor: primaryColor }}></div>
          <div className="rounded-lg w-48 md:h-44 h-20" style={{ backgroundColor: secondaryColor }}></div>
          <div className="rounded-lg w-40 md:h-44 h-20" style={{ backgroundColor: bgColor }}></div>
          <div className="rounded-lg w-36 md:h-44 h-20" style={{ backgroundColor: accentColor }}></div>
          <div className="rounded-md w-4 md:h-44 h-20" style={{ backgroundColor: textColor }}></div>
        </div>
        <div className="flex justify-center gap-2 px-8 py-2">
          <div className="rounded-lg w-36 md:h-44 h-20" style={{ backgroundColor: accentColor }}></div>
          <div className="rounded-md w-4 md:h-44 h-20" style={{ backgroundColor: textColor }}></div>
          <div className="rounded-lg w-48 md:h-44 h-20" style={{ backgroundColor: secondaryColor }}></div>
          <div className="rounded-lg w-72 md:h-24 h-20" style={{ backgroundColor: primaryColor }}></div>
          <div className="rounded-lg w-40 md:h-44 h-20" style={{ backgroundColor: bgColor }}></div>
        </div>
      </div>

      {/*MenuBar*/}

      <div className="text-center items-center justify-center flex invisible md:visible">
        <div className="flex justify-center gap-2 item-blur bg-zinc-900 mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "200" }}>
          {/* Text Button */}
          <Button
            className="py-6 px-7 text-md dark:text-white text-black"
            style={{ backgroundColor: "#202020", color: "#fff" }}
            onClick={() => setSelectedColor("text")}
          >
            Text
          </Button>

          {/* Background Button */}
          <Button
            className="py-6 px-7 text-md dark:text-white"
            style={{ backgroundColor: bgColor }}
            onClick={() => setSelectedColor("bg")}
          >
            Background
          </Button>

          {/* Primary Button */}
          <Button
            className="py-6 px-7 text-md dark:text-white"
            style={{ backgroundColor: primaryColor }}
            onClick={() => setSelectedColor("primary")}
          >
            Primary
          </Button>

          {/* Secondary Button */}
          <Button
            className="py-6 px-7 text-md dark:text-white"
            style={{ backgroundColor: secondaryColor }}
            onClick={() => setSelectedColor("secondary")}
          >
            Secondary
          </Button>

          {/* Accent Button */}
          <Button
            className="py-6 px-7 text-md dark:text-white"
            style={{ backgroundColor: accentColor }}
            onClick={() => setSelectedColor("accent")}
          >
            Accent
          </Button>

          <hr className="w-0.5 rounded-lg h-12 bg-gray-400" />

          {/* ... other buttons */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="w-[3rem] h-[3rem]">
                <SunIcon className="absolute h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => applyColor("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyColor("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => applyColor("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {selectedColor && (
        <div className="p-3 rounded-lg dark:bg-zinc-800 bg-slate-200" style={{ position: "absolute", top: "100px", left: "50%", transform: "translateX(-50%)", position: "fixed", top: "calc(50% - 150px)", left: "50%", transform: "translateX(-50%)", zIndex: "200", }} >
          <ChromePicker
            color={selectedColor === "text" ? textColor : selectedColor === "bg" ? bgColor : selectedColor === "primary" ? primaryColor : selectedColor === "secondary" ? secondaryColor : accentColor}
            onChange={color =>
              setSelectedColor(prevColor => {
                if (prevColor === "text") {
                  handleTextColorChange(color);
                } else if (prevColor === "bg") {
                  handleBgColorChange(color);
                } else if (prevColor === "primary") {
                  handlePrimaryColorChange(color);
                } else if (prevColor === "secondary") {
                  handleSecondaryColorChange(color);
                } else if (prevColor === "accent") {
                  handleAccentColorChange(color);
                }
                return prevColor;
              })
            }
          />
          <Button onClick={() => setSelectedColor(null)} className="mt-2">Close</Button>
        </div>
      )}
    </main>
  )
}
