import MyButton from "@/components/Button.Component";
import Spacer from "@/components/Spacer";
import { ThemedSafeAreaView } from "@/components/theme";
import { themeConfig } from "@/components/theme/theme-config";
import { paths } from "@/constants/paths";
import { router } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text, TextInput } from "react-native-paper";

const RegisterScreen = () => {
  const { t } = useTranslation();

  const { height: screenHeight } = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(0);

  // 👇 true ONLY when there is empty vertical space
  const shouldCenter = contentHeight > 0 && contentHeight < screenHeight;

  const handleLogin = () => {
    router.replace(paths.auth.jwt.logIn);
  }

  return (<ThemedSafeAreaView className="p-5">
    <KeyboardAwareScrollView enableOnAndroid keyboardShouldPersistTaps="handled"
      extraScrollHeight={20}
      contentContainerStyle={[
        styles.container,
        { justifyContent: shouldCenter ? 'center' : 'flex-start' }
      ]}
      onContentSizeChange={(w, h) => setContentHeight(h)}
    >
      <View className="gap-2">
        <View className="items-center">
          <Text className="text-3xl">{t('auth.register.title')}</Text>
        </View>
        <Spacer />
        <View className="flex-row gap-3">
          <TextInput style={{ flex: 1 }} mode="outlined" label={t('auth.register.First_Name')} />
          <TextInput style={{ flex: 1 }} mode="outlined" label={t('auth.register.Last_Name')} />
        </View>
        <TextInput mode="outlined" label={t('auth.register.Phone')} />
        <TextInput mode="outlined" label={t('auth.common.Email')} keyboardType="email-address" />
        <TextInput mode="outlined" label={t('auth.common.Password')} secureTextEntry />
        {/* <TextInput mode="outlined" label={t('auth.register.City')} />
        <TextInput mode="outlined" label={t('auth.register.State')} />
        <TextInput mode="outlined" label={t('auth.register.Country')} />
        <TextInput mode="outlined" label={t('auth.register.Post_Code')} keyboardType="number-pad" />
        <TextInput mode="outlined" label={t('auth.register.Address')} /> */}
      </View>
      <Spacer />
      <MyButton mode="contained">{t('auth.common.Sign_Up')}</MyButton>
      <Spacer height={themeConfig.size.md} />
      <View className="flex-row justify-center items-center">
        <Text>{t("auth.register.Account?")}</Text>
        <Button onPress={handleLogin}>{t('auth.common.Login')}</Button>
      </View>
    </KeyboardAwareScrollView>
  </ThemedSafeAreaView>)
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,   // IMPORTANT
    // padding: 20,
  },
  // form: {
  //   gap: 12,
  // },
});

export default RegisterScreen;