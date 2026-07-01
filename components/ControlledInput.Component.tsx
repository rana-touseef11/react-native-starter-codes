import {
  Control,
  Controller,
  // FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";
import { Text, TextInput, TextInputProps } from "react-native-paper";
import { themeConfig } from "./theme/theme-config";

type Props<T extends FieldValues> = Omit<TextInputProps, "value" | "onChangeText" | "onBlur"> & {
  control: Control<T>;
  name: Path<T>;
  // label: string;
  // errors: FieldErrors<T>;
};

const ControllerInput = <T extends FieldValues>({
  control,
  name,
  // label,
  // errors,
  ...other
}: Props<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <>
            <TextInput
              mode="outlined"
              // label={label}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!error}
              {...other}
            />
            {error && (
              <Text style={{ color: themeConfig.palette.error.main }} className="text-sm -mt-1.5">
                {error.message as string}
              </Text>
            )}
          </>
        )}
      />

      {/* {errors[name] && (
        <Text style={{ color: themeConfig.palette.error.main }} className="text-sm -mt-1.5">
          {errors[name]?.message as string}
        </Text>
      )} */}
    </>
  );
};

export default ControllerInput;
