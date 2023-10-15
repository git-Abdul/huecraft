"use client"
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ChromePicker } from "react-color";
import { NavBar } from "@/components/navBar";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Page() {
  const { setTheme } = useTheme();
  const [selectedColor, setSelectedColor] = useState(null);
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#F9EADC");
  const [primaryColor, setPrimaryColor] = useState("#237ECD");
  const [secondaryColor, setSecondaryColor] = useState("#D7BEF4");
  const [accentColor, setAccentColor] = useState("#000");

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
    <main>
      <NavBar />
      <Card className="p-10 mt-20 md:mx-10 mx-2 mb-10" style={{ backgroundColor: bgColor }}>
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
        <div className="text-left">
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2 mt-10">"Exploring the Wonders of Underwater Photography"</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Have you ever wondered what lies beneath the surface of the world's oceans, seas, and rivers? The underwater world is a mesmerizing realm, filled with stunning marine life, colorful coral reefs, and mysterious shipwrecks. For those with a passion for both photography and the deep blue, underwater photography is a fascinating and rewarding pursuit.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">Capturing the Beauty Below</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Underwater photography allows us to document the beauty and diversity of aquatic life, and it provides a unique perspective that's unlike any other form of photography. From the tranquil elegance of a sea turtle gliding through crystal-clear waters to the vibrant, alien-like colors of a coral reef teeming with fish, underwater photography enables us to glimpse a world that's often hidden from view.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">The Essentials of Underwater Photography</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Before embarking on your underwater photography journey, there are some essential tools and techniques to consider. Waterproof camera housings, specialized lenses, and proper lighting equipment are just a few of the items that can make a significant difference in the quality of your underwater shots. Additionally, mastering buoyancy control and understanding the unique challenges of shooting underwater are crucial skills for any aspiring underwater photographer.</p>
            <h1 className="font-bold text-3xl italic font-bridge md:m-10 m-2">Conclusion</h1>
            <p className="font-medium font-inter md:m-10 text-xl m-2">Underwater photography is a captivating and challenging niche within the photography world. It allows us to capture the wonders of the underwater world and promote marine conservation. If you're passionate about both photography and the oceans, consider taking the plunge into the world of underwater photography. It's an opportunity to explore a new dimension of art and nature while contributing to the preservation of our planet's most precious resource.</p>
            <Button className="mx-10 m-2 text-xl font-inter py-8 px-6 font-bold transition ease-in-out hover:scale-110" style={{backgroundColor: secondaryColor, color: textColor}}>Share this on Twitter</Button>
        </div>
      </Card>
      <br />
      <br />
      <br />
      <br />
      {/* MenuBar */}
      <div className="text-center items-center justify-center flex invisible md:visible">
        <div className="flex justify-center font-poppins gap-2 backdrop-blur-lg bg-white/10 dark:bg-zinc-800/30 mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "5" }}>
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
  );
}
