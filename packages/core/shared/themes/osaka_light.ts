import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const osakaLightTheme: Colors = {
  // Background
  BgPrimary: "#FFFFFF",
  BgSecondary: "#F5F4EE",
  BgLightGray: "#EBE8CA",
  BgGray: "#76724F",
  BgDarkGray: "#3A3B28",
  BgDisabled: "#BBB681",
  BgContrast: "#2C2C26",
  BgContrastPressed: "#1F1F1B",
  BgContrastSecondary: "#1F1F1B",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#DE9B2F",
  BgAccentPressed: "#B47C23",
  BgSuccess: "#B9CD7B",
  BgWarning: "#F8DB71",
  BgWarningPressed: "#EFC734",
  BgDanger: "#EF929E",
  BgOrange: "#E4BA75",
  BgBlue: "#92ACEF",

  // Border
  BorderDefault: "#EBE8CA",
  BorderContrast: "#3A3B28",

  // Text
  TextPrimary: "#2C2C26",
  TextPrimaryPressed: "#1F1F1B",
  TextSecondary: "#76724F",
  TextSecondaryPressed: "#3A3B28",
  TextDisabled: "#BBB681",
  TextContrast: "#FFFFFF",
  TextWhite: "#FFFFFF",
  TextAccent: "#DE9B2F",
  TextAccentPressed: "#B47C23",
  TextSuccess: "#B9CD7B",
  TextWarning: "#F8DB71",
  TextWarningPressed: "#EFC734",
  TextDanger: "#EF929E",

  // system
  primary: "#DE9B2F", // BgAccent
  background: "#FFFFFF", // BgPrimary
  card: "#FFFFFF", // BgPrimary
  text: "#2C2C26", // TextPrimary
  border: "#EBE8CA", // BorderDefault
  notification: "#2C2C26", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "light",
};

export { osakaLightTheme };
