import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const blueOceanDarkTheme: Colors = {
  // Background
  BgPrimary: "#0A141E",
  BgSecondary: "#141E2B",
  BgLightGray: "#242E3A",
  BgGray: "#A5AFBA",
  BgDarkGray: "#D6DFE9",
  BgDisabled: "#5B6877",
  BgContrast: "#FFFFFF",
  BgContrastPressed: "#D6DFE9",
  BgContrastSecondary: "#ECF1F5",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#0099E8",
  BgAccentPressed: "#007DBD",
  BgSuccess: "#3BDD9D",
  BgWarning: "#F3D74C",
  BgWarningPressed: "#F8E275",
  BgDanger: "#D24043",
  BgOrange: "#E19146",
  BgBlue: "#0099E8",

  // Border
  BorderDefault: "#242E3A",
  BorderContrast: "#D6DFE9",

  // Text
  TextPrimary: "#FFFFFF",
  TextPrimaryPressed: "#D6DFE9",
  TextSecondary: "#A5AFBA",
  TextSecondaryPressed: "#5B6877",
  TextDisabled: "#5B6877",
  TextContrast: "#0A141E",
  TextWhite: "#FFFFFF",
  TextAccent: "#0099E8",
  TextAccentPressed: "#007DBD",
  TextSuccess: "#3BDD9D",
  TextWarning: "#F3D74C",
  TextWarningPressed: "#F8E275",
  TextDanger: "#D24043",

  // system
  primary: "#0099E8", // BgAccent
  background: "#0A141E", // BgPrimary
  card: "#0A141E", // BgPrimary
  text: "#FFFFFF", // TextPrimary
  border: "#242E3A", // BorderDefault
  notification: "#FFFFFF", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "dark",
};

export { blueOceanDarkTheme };
