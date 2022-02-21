import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "linear-gradient(to right, #f12711, #f5af19)" /*  "#1D1746", */,
  primary1: "#000000",
  buttonHover: "#145DA0",
  iconHover: "	#FFDB58",
  iconDarkHover: "#000000",
  primaryBright: "#FFAA33" /*"#aa8929", */,
  primaryDark: "	#C9CC3F" /*  "#aa8929", */,
  secondary: "#000000" /* "#7645D9", */,
  success: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
  warning: "#FFB237" /* #8f80ba */,
};

export const brandColors = {
  binance: "#0000FF",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f2f8fb",
  backgroundGif : "/images/day.gif",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "linear-gradient(to right, #f12711, #f5af19)", //  "#AFEEEE",
  tertiary: "#000000" /* "#EFF4F5",*/,
  text: "#1D1746" /*   "#FF0000" "#452A7A" */,
  textDisabled: "#BDC2C4",
  textSubtle: "#000034" /* "#8f80ba" */,
  borderColor: "#E9EAEB",
  card: "#f2f8fb",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#EAE2FC" /* "#9A6AFF", */,
  background: "#000034" /* "#343135", */, 
  backgroundGif : "/images/bg.jpg",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "red", // "#AFEEEE",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF" /* "#353547", */,
  borderColor: "#524B63",
  card: "#000034", //   "#000034",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
