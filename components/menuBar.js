"use client"
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ChromePicker, SketchPicker } from "react-color";

export function MenuBar() {
    const { setTheme } = useTheme();

    const [selectedColor, setSelectedColor] = useState(null);
    const [textColor, setTextColor] = useState("#fff"); 
    const [bgColor, setBgColor] = useState("#202020"); 
    const [primaryColor, setPrimaryColor] = useState("#1E6ED3");
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
        <>
            <div className="text-center items-center justify-center flex invisible md:visible">
                <div className="flex justify-center gap-2 item-blur mx-32 p-5 fixed mt-20 bottom-0 mb-5 rounded-lg" style={{ zIndex: "200" }}>
                    {/* Text Button */}
                    <Button
                        className="py-6 px-7 text-md dark:text-white text-black  font-inter font-bold"
                        style={{ backgroundColor: "#202020", color: "#fff" }}
                        onClick={() => setSelectedColor("text")}
                    >
                        Text
                    </Button>

                    {/* Background Button */}
                    <Button
                        className="py-6 px-7 text-md dark:text-white font-inter font-bold"
                        style={{ backgroundColor: "#202020" }}
                        onClick={() => setSelectedColor("bg")}
                    >
                        Background
                    </Button>

                    {/* Primary Button */}
                    <Button
                        className="py-6 px-7 text-md dark:text-white font-inter font-bold"
                        style={{ backgroundColor: primaryColor }}
                        onClick={() => setSelectedColor("primary")}
                    >
                        Primary
                    </Button>

                    {/* Secondary Button */}
                    <Button
                        className="py-6 px-7 text-md dark:text-white font-inter font-bold"
                        style={{ backgroundColor: secondaryColor }}
                        onClick={() => setSelectedColor("secondary")}
                    >
                        Secondary
                    </Button>

                    {/* Accent Button */}
                    <Button
                        className="py-6 px-7 text-md dark:text-white font-inter font-bold"
                        style={{ backgroundColor: accentColor }}
                        onClick={() => setSelectedColor("accent")}
                    >
                        Accent
                    </Button>

                    <hr className="w-0.5 rounded-lg h-12 bg-zinc-500 border-none" />

                    {/* ... other buttons */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="w-[3rem] h-[3rem]">
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
                        className="rounded-lg font-poppins font-medium"
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
        </>
    );
}
