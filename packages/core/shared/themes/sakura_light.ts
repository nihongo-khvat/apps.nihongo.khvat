import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const sakuraLightTheme: Colors = {
  // Background
  BgPrimary: "#FFFFFF",
  BgSecondary: "#F5EDED",
  BgLightGray: "#EACBCA",
  BgGray: "#76504F",
  BgDarkGray: "#392626",
  BgDisabled: "#BA9695",
  BgContrast: "#2D2424",
  BgContrastPressed: "#1F1717",
  BgContrastSecondary: "#1F1717",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#85543F",
  BgAccentPressed: "#5A3628",
  BgSuccess: "#95AC5A",
  BgWarning: "#FFDF86",
  BgWarningPressed: "#FFD358",
  BgDanger: "#F58587",
  BgOrange: "#E08C69",
  BgBlue: "#73BCE9",

  // Border
  BorderDefault: "#EACBCA",
  BorderContrast: "#392626",

  // Text
  TextPrimary: "#2D2424",
  TextPrimaryPressed: "#1F1717",
  TextSecondary: "#76504F",
  TextSecondaryPressed: "#392626",
  TextDisabled: "#BA9695",
  TextContrast: "#FFFFFF",
  TextWhite: "#FFFFFF",
  TextAccent: "#85543F",
  TextAccentPressed: "#5A3628",
  TextSuccess: "#95AC5A",
  TextWarning: "#FFDF86",
  TextWarningPressed: "#FFD358",
  TextDanger: "#F58587",

  // system
  primary: "#85543F", // BgAccent
  background: "#FFFFFF", // BgPrimary
  card: "#FFFFFF", // BgPrimary
  text: "#2D2424", // TextPrimary
  border: "#EACBCA", // BorderDefault
  notification: "#2D2424", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "light",
};

export { sakuraLightTheme };
