import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface Props extends SafeAreaViewProps {
  style?: StyleProp<ViewStyle>;
}
const ThemedSafeAreaView = ({
  style,
  ...props
}: Props) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}
      {...props}
    />
  );
}

export default ThemedSafeAreaView;