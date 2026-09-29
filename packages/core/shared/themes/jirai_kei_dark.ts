import { darkTheme } from "./dark";

type Colors = typeof darkTheme;

const jiraiKeiDark: Colors = {
  // Background
  BgPrimary: "#1C1A1B",
  BgSecondary: "#2B282A",
  BgLightGray: "#3A3538",
  BgGray: "#B8A8AE",
  BgDarkGray: "#EADFE3",
  BgDisabled: "#776F72",
  BgContrast: "#FFFFFF",
  BgContrastPressed: "#EADFE3",
  BgContrastSecondary: "#F5EFF1",
  BgWhite: "#FFFFFF",
  BgModal: "#00000080",
  BgAccent: "#A38BAD",
  BgAccentPressed: "#4E4153",
  BgSuccess: "#83C5AF",
  BgWarning: "#F2C85A",
  BgWarningPressed: "#EECF7F",
  BgDanger: "#F18686",
  BgOrange: "#F3AF73",
  BgBlue: "#7CA3F1",

  // Border
  BorderDefault: "#3A3538",
  BorderContrast: "#EADFE3",

  // Text
  TextPrimary: "#FFFFFF",
  TextPrimaryPressed: "#EADFE3",
  TextSecondary: "#B8A8AE",
  TextSecondaryPressed: "#776F72",
  TextDisabled: "#776F72",
  TextContrast: "#1C1A1B",
  TextWhite: "#FFFFFF",
  TextAccent: "#A38BAD",
  TextAccentPressed: "#4E4153",
  TextSuccess: "#83C5AF",
  TextWarning: "#F2C85A",
  TextWarningPressed: "#EECF7F",
  TextDanger: "#F18686",

  // system
  primary: "#A38BAD", // BgAccent
  background: "#1C1A1B", // BgPrimary
  card: "#1C1A1B", // BgPrimary
  text: "#FFFFFF", // TextPrimary
  border: "#3A3538", // BorderDefault
  notification: "#FFFFFF", // BgContrast

  // transparent
  transparent: "transparent",

  _theme: "dark",
};

export { jiraiKeiDark };
