import { BookmarkIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function DocsIcons() {
    const { theme } = useTheme();
    const isLightMode = theme === 'light';
    if (isLightMode) {
        return (
            <BookmarkIcon className="w-4 h-4"/>
        )
    }
    else {
        return (
            <BookmarkIcon className="w-4 h-4"/>
        )
    }
}
