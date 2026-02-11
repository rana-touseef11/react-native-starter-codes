// import { Text } from "react-native";
import { ThemedSafeAreaView } from "@/components/theme";
import { useTranslation } from "react-i18next";
import { Button, Text } from "react-native-paper";

const WelcomeScreen = () => {
  const { t, i18n } = useTranslation();

  return (<ThemedSafeAreaView>
    <Text>{t('auth.welcome', { name: 'Solar' })}</Text>
    <Text>{t('auth.entered', { count: 1 })}</Text>
    <Button mode="contained-tonal">Save</Button>
  </ThemedSafeAreaView>);
}

export default WelcomeScreen;