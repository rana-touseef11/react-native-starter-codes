// import { Text } from "react-native";
import MyButton from "@/components/Button.Component";
import { ThemedSafeAreaView } from "@/components/theme";
import { paths } from "@/constants/paths";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

const WelcomeScreen = () => {
  const { t } = useTranslation();

  const handleSkip = () => {
    router.replace(paths.tabs.home);
    // console.log('you hit skip');
  }

  const handleLogin = () => {
    router.push(paths.auth.jwt.logIn);
  }

  const handleRegister = () => {
    router.push(paths.auth.jwt.signUp);
  }

  return (<ThemedSafeAreaView className="justify-between">
    <View className="items-end mt-2">
      <Button onPress={handleSkip}>{t('auth.welcome.Skip')}</Button>
    </View>
    <View className="items-center">
      <Text className="text-2xl">{t('auth.welcome.title', { name: 'React Native Starter' })}</Text>
    </View>
    <View className="gap-4 m-5">
      <MyButton mode="contained" onPress={handleLogin}>{t('auth.common.Login')}</MyButton>
      <MyButton mode="outlined" onPress={handleRegister}>{t('auth.common.Sign_Up')}</MyButton>
    </View>
  </ThemedSafeAreaView>);
}

export default WelcomeScreen;