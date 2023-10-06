import { MoonIcon, RotateCounterClockwiseIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function RotateIcons() {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';
    if (isLightMode) {
        return (
            <div>
                <RotateCounterClockwiseIcon className="w-5 h-5" />
            </div>
        )
    }
    else {
        return (
            <div>
                <RotateCounterClockwiseIcon className="w-5 h-5" />
            </div>
        )
    }
}
