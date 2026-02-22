import { useMemo } from "react";
import { useColorScheme } from "react-native";
// import { buildTheme } from "./buildTheme";
import {
  DarkTheme as NavigationDark,
  DefaultTheme as NavigationDefault,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import { adaptNavigationTheme } from "react-native-paper";
import { buildTheme } from ".";

export function useCustomAppTheme(): {
  paperTheme: any;
  navigationTheme: NavigationTheme;
} {
  const scheme = useColorScheme();
  // const mode = scheme === "dark" ? "dark" : "light";

  // 1️⃣ your paper theme
  const paperTheme = useMemo(() => buildTheme(scheme), [scheme]);

  // 2️⃣ make navigation understand paper theme structure
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefault,
    reactNavigationDark: NavigationDark,
  });

  // 3️⃣ merge paper colors INTO navigation theme
  const navigationTheme = useMemo<NavigationTheme>(() => {
    const base = scheme === "dark" ? DarkTheme : LightTheme;

    return {
      ...base,
      dark: paperTheme.dark,
      colors: {
        ...base.colors,
        primary: paperTheme.colors.primary,
        background: paperTheme.colors.background,
        card: paperTheme.colors.surface ?? paperTheme.colors.background,
        text: paperTheme.colors.onSurface,
        border: paperTheme.colors.outline,
        notification: paperTheme.colors.primary,
      },
    };
  }, [scheme, paperTheme, LightTheme, DarkTheme]);

  return { paperTheme, navigationTheme };
}
