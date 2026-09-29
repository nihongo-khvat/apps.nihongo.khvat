/**
 *
 *   bun packages/core/scripts/figma-themes.ts ~/Downloads/export.json ./out
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Token = { $value: string | number; $collectionName?: string };
type Group = Record<string, Token>;
type Collection = { modes: Record<string, Record<string, unknown>> };

const THEMES: Record<string, { file: string; name: string; base?: boolean }> = {
  "Default (Dark)": { file: "dark", name: "darkTheme", base: true },
  "Default (Light)": { file: "light", name: "lightTheme" },
  "Blue ocean (Dark)": { file: "blue_ocean", name: "blueOceanDarkTheme" },
  "Blue ocean (Light)": { file: "blue_ocean_light", name: "blueOceanLightTheme" },
  "Hokkaido (Dark)": { file: "hokkaido_dark", name: "hokkaidoDarkTheme" },
  "Hokkaido (Light)": { file: "hokkaido_light", name: "hokkaidoLightTheme" },
  "Jirai kei (Dark)": { file: "jirai_kei_dark", name: "jiraiKeiDark" },
  "Jirai kei (Light)": { file: "jirai_kei_light", name: "jiraiKeiLight" },
  "Osaka (Dark)": { file: "osaka_dark", name: "osakaDarkTheme" },
  "Osaka (Light)": { file: "osaka_light", name: "osakaLightTheme" },
  "Sakura (Dark)": { file: "sakura_dark", name: "sakuraDarkTheme" },
  "Sakura (Light)": { file: "sakura_light", name: "sakuraLightTheme" },
};

const exportPath = process.argv[2];
if (!exportPath) {
  console.error("usage: bun figma-themes.ts <export.json> [outDir]");
  process.exit(1);
}

const themesDir = process.argv[3] ?? join(import.meta.dirname, "../shared/themes");
const collections: Record<string, Collection> = Object.assign(
  {},
  ...JSON.parse(readFileSync(exportPath, "utf8")),
);

function toHex(value: string): string {
  const rgba = value.match(/^rgba?\(([^)]+)\)$/);
  if (!rgba) return value.toUpperCase();

  const [r, g, b, a = 1] = rgba[1].split(",").map(Number);
  const hex = [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("");
  const alpha =
    a < 1
      ? Math.round(a * 255)
          .toString(16)
          .padStart(2, "0")
      : "";
  return `#${hex}${alpha}`.toUpperCase();
}

function resolve(token: Token): string {
  const value = String(token.$value);
  const ref = value.match(/^\{(.+)\}$/);
  if (!ref) return toHex(value);

  const collection = collections[token.$collectionName ?? ""];
  if (!collection) throw new Error(`Unknown collection "${token.$collectionName}" for ${value}`);

  const primitives = Object.values(collection.modes)[0];
  const [group, ...rest] = ref[1].split(".");
  const primitive = (primitives[group] as Group | undefined)?.[rest.join(".")];
  if (!primitive) throw new Error(`Unresolved ${value} in "${token.$collectionName}"`);
  return resolve({ ...primitive, $collectionName: token.$collectionName });
}

const semantic = collections.Semantic;

for (const [mode, groups] of Object.entries(semantic.modes)) {
  const theme = THEMES[mode];
  if (!theme) {
    console.warn(`skip: no file mapping for mode "${mode}"`);
    continue;
  }

  const colors: Record<string, string> = {};
  const lines: string[] = [];

  for (const [groupName, tokens] of Object.entries(groups as Record<string, Group>)) {
    lines.push(`  // ${groupName}`);
    for (const [key, token] of Object.entries(tokens)) {
      colors[key] = resolve(token);
      lines.push(`  ${key}: "${colors[key]}",`);
    }
    lines.push("");
  }

  lines.push(
    "  // system",
    `  primary: "${colors.BgAccent}", // BgAccent`,
    `  background: "${colors.BgPrimary}", // BgPrimary`,
    `  card: "${colors.BgPrimary}", // BgPrimary`,
    `  text: "${colors.TextPrimary}", // TextPrimary`,
    `  border: "${colors.BorderDefault}", // BorderDefault`,
    `  notification: "${colors.BgContrast}", // BgContrast`,
    "",
    "  // transparent",
    `  transparent: "transparent",`,
    "",
    `  _theme: "${mode.includes("(Dark)") ? "dark" : "light"}",`,
  );

  const header = theme.base
    ? `const ${theme.name} = {`
    : `import { darkTheme } from "./dark";\n\ntype Colors = typeof darkTheme;\n\nconst ${theme.name}: Colors = {`;

  const source = `${header}\n${lines.join("\n")}\n};\n\nexport { ${theme.name} };\n`;
  writeFileSync(join(themesDir, `${theme.file}.ts`), source);
  console.log(`${mode} -> ${theme.file}.ts`);
}
