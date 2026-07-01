import { memo } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

interface Props extends ViewProps {
  style?: StyleProp<ViewStyle>;
}
const ThemedView = ({ style, ...props }: Props) => {
  const theme = useTheme();

  return (
    <View
      style={[{ backgroundColor: theme.colors.background }, style]}
      {...props}
    />
  );
}

export default memo(ThemedView);