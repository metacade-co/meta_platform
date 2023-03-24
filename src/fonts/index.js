import localFont from "next/font/local";

const retroFont = localFont({ src: "./joystix-regular.ttf", variable: "--font-retro-gaming", display: "swap" });
const goshaFont = localFont({
  src: [
    { path: "./gosha-sans-regular.otf", weight: "400" },
    { path: "./gosha-sans-bold.otf", weight: "700" },
  ],
  variable: "--font-gosha-sans",
  display: "swap",
});

export const fonts = {
  retroFont,
  goshaFont,
};
