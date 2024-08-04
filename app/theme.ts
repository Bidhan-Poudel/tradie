import { createTheme } from "@mantine/core";
import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
})


export const theme = createTheme({
    colors: {
        primary: [
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#FF6D3A",
            "#ff8f6c"
        ],
        blue: [
            "#878a94",
            "#878a94",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
            "#222937",
        ],
        offWhite: [
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
            "#f5f7fa",
        ]
    },
    fontFamily: dmSans.style.fontFamily,
    primaryColor: "primary",
    headings: {
        fontFamily: dmSans.style.fontFamily,
        fontWeight: "700",
    }
})