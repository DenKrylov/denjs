import { atom } from "recoil";

const choiseTheme = () => {
  const theme = localStorage.getItem("theme");
  switch (true) {
    case theme === "dark":
      return true;
    case theme === "light":
      return false;
    default:
      return window.matchMedia("(prefers-color-scheme dark)").matches;
  }
};

export const themeState = atom<boolean>({
  key: "themeState",
  default: choiseTheme(),
});
