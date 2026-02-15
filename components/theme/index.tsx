import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { themeConfig } from "./theme-config";

type Mode = "light" | "dark";

export const buildTheme = (mode: Mode) => {
  const base = mode === "dark" ? MD3DarkTheme : MD3LightTheme;
  const isDark = mode === "dark";

  return {
    ...base,
    dark: isDark,
    colors: {
      ...base.colors,

      // BRAND
      primary: themeConfig.palette.primary.main,
      secondary: themeConfig.palette.secondary.main,

      // TONAL BUTTON (THIS IS WHAT YOU ARE MISSING)
      secondaryContainer: themeConfig.palette.primary.lighter,
      onSecondaryContainer: themeConfig.palette.primary.darker,


      // MODE BASED (THE IMPORTANT PART)
      background: isDark ? "#141A21" : "#F3F4F6",
      // surface: isDark ? "#1E293B" : "#FFFFFF",
      // surfaceVariant: themeConfig.palette.primary.lighter,
      // card: isDark ? "#1E293B" : "#FFFFFF",

      // TEXT COLORS
      // onSurface: isDark ? "#E5E7EB" : "#111827",
      // onPrimary: "#FFFFFF",

      // BORDERS
      outline: themeConfig.palette.primary.light,

      // BUTTON
      // button: themeConfig.palette.primary.main,
    },
  };
};

// re-export themed components
export { default as ThemedSafeAreaView } from "./ThemedSafeAreaView";
export { default as ThemedView } from "./ThemedView";

