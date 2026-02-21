import MyButton from "@/components/Button.Component";
import ControllerInput from "@/components/ControlledInput.Component";
import Spacer from "@/components/Spacer";
import { ThemedSafeAreaView } from "@/components/theme";
import { themeConfig } from "@/components/theme/theme-config";
import { paths } from "@/constants/paths";
import { LoginSchema, LoginSchemaType } from "@/services/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from "react-native-paper";

const LoginScreen = () => {
  const { t } = useTranslation();
  const defaultValues: LoginSchemaType = {
    email: '',
    password: '',
  };

  const { height: screenHeight } = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(0);

  // 👇 true ONLY when there is empty vertical space
  const shouldCenter = contentHeight > 0 && contentHeight < screenHeight;

  const handleRegister = () => {
    router.replace(paths.auth.jwt.signUp);
  }

  const methods = useForm<LoginSchemaType>({
    // mode: "onChange",
    // reValidateMode: "onChange",
    // criteriaMode: 'all',
    resolver: zodResolver(LoginSchema),
    defaultValues,
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;
  const onSubmit = handleSubmit((data) => {
    console.log(data, '... final output')
  });

  useEffect(() => { console.log(errors, '... see the errors..') }, [errors])

  return (<ThemedSafeAreaView className="p-4">
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
          <Text className="text-3xl">{t('auth.login.title')}</Text>
        </View>
        <Spacer />

        <ControllerInput control={control} label={t('auth.common.Email')} name="email" />
        <ControllerInput control={control} label={t('auth.common.Password')} name="password" secureTextEntry />
      </View>

      <Spacer />
      <MyButton mode="contained" onPress={onSubmit}>{t('auth.common.Login')}</MyButton>
      <Spacer height={themeConfig.size.md} />

      <View className="flex-row justify-center items-center">
        <Text>{t("auth.login.Account?")}</Text>
        <Button onPress={handleRegister}>{t('auth.common.Sign_Up')}</Button>
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

export default LoginScreen;