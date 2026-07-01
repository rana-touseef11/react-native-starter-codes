import { useCustomAppTheme } from "@/components/theme/useCustomAppTheme";
import "@/i18n/index";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import "./global.css";

export default function RootLayout() {
  const { paperTheme, navigationTheme } = useCustomAppTheme();

  return (
    <ThemeProvider value={navigationTheme}>
      <PaperProvider theme={paperTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  );
}
