import { DarkTheme, LightTheme } from "@/components/theme";
import "@/i18n/index";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { PaperProvider } from 'react-native-paper';
import "./global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

  return (<PaperProvider theme={theme}>
    {/* <StatusBar barStyle='dark-content' /> */}
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />

      <Stack.Screen name="+not-found" />
    </Stack>
  </PaperProvider>);
}
