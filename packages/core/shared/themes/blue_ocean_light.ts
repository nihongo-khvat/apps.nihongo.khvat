import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const blueOceanLightTheme: Colors = {
  // Background
  BgPrimary: "#FFFFFF",
  BgSecondary: "#ECF1F5",
  BgLightGray: "#D6DFE9",
  BgGray: "#5B6877",
  BgDarkGray: "#242E3A",
  BgDisabled: "#A5AFBA",
  BgContrast: "#141E2B",
  BgContrastPressed: "#0A141E",
  BgContrastSecondary: "#0A141E",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#55BBEA",
  BgAccentPressed: "#007DBD",
  BgSuccess: "#6CE6B5",
  BgWarning: "#F8E275",
  BgWarningPressed: "#F3D74C",
  BgDanger: "#E66C6E",
  BgOrange: "#E6A76C",
  BgBlue: "#55BBEA",

  // Border
  BorderDefault: "#D6DFE9",
  BorderContrast: "#242E3A",

  // Text
  TextPrimary: "#141E2B",
  TextPrimaryPressed: "#0A141E",
  TextSecondary: "#5B6877",
  TextSecondaryPressed: "#242E3A",
  TextDisabled: "#A5AFBA",
  TextContrast: "#FFFFFF",
  TextWhite: "#FFFFFF",
  TextAccent: "#55BBEA",
  TextAccentPressed: "#007DBD",
  TextSuccess: "#6CE6B5",
  TextWarning: "#F8E275",
  TextWarningPressed: "#F3D74C",
  TextDanger: "#E66C6E",

  // system
  primary: "#55BBEA", // BgAccent
  background: "#FFFFFF", // BgPrimary
  card: "#FFFFFF", // BgPrimary
  text: "#141E2B", // TextPrimary
  border: "#D6DFE9", // BorderDefault
  notification: "#141E2B", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "light",
};

export { blueOceanLightTheme };
