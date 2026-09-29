import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const hokkaidoLightTheme: Colors = {
  // Background
  BgPrimary: "#FFFFFF",
  BgSecondary: "#EDF3F4",
  BgLightGray: "#CBE3EA",
  BgGray: "#506D75",
  BgDarkGray: "#27363B",
  BgDisabled: "#82ADBA",
  BgContrast: "#1F292D",
  BgContrastPressed: "#141B1E",
  BgContrastSecondary: "#141B1E",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#E97237",
  BgAccentPressed: "#B25020",
  BgSuccess: "#9AD563",
  BgWarning: "#FCC470",
  BgWarningPressed: "#F3A92A",
  BgDanger: "#D4746B",
  BgOrange: "#EA8C5D",
  BgBlue: "#7AD3ED",

  // Border
  BorderDefault: "#CBE3EA",
  BorderContrast: "#27363B",

  // Text
  TextPrimary: "#1F292D",
  TextPrimaryPressed: "#141B1E",
  TextSecondary: "#506D75",
  TextSecondaryPressed: "#27363B",
  TextDisabled: "#82ADBA",
  TextContrast: "#FFFFFF",
  TextWhite: "#FFFFFF",
  TextAccent: "#E97237",
  TextAccentPressed: "#B25020",
  TextSuccess: "#9AD563",
  TextWarning: "#FCC470",
  TextWarningPressed: "#F3A92A",
  TextDanger: "#D4746B",

  // system
  primary: "#E97237", // BgAccent
  background: "#FFFFFF", // BgPrimary
  card: "#FFFFFF", // BgPrimary
  text: "#1F292D", // TextPrimary
  border: "#CBE3EA", // BorderDefault
  notification: "#1F292D", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "light",
};

export { hokkaidoLightTheme };
