import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: "#ffffff",
  },
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: "#000000",
  },
};

// re-export themed components
export { default as ThemedSafeAreaView } from "./ThemedSafeAreaView";
export { default as ThemedView } from "./ThemedView";

