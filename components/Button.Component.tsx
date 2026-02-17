import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Button, ButtonProps } from 'react-native-paper';
import { themeConfig } from './theme/theme-config';

type MyButtonProps = ButtonProps & {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode; // ← force required again
};

const MyButton = ({ style, children, ...props }: MyButtonProps) => {
  return (
    <Button
      {...props}
      style={[{ borderRadius: themeConfig.radius.borderRadius, paddingBlock: 4 }, style]}
    >
      {children}
    </Button>
  );
};

export default MyButton;
