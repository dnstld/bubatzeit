import React, { ComponentProps } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { TextInput, Text, HelperText } from 'react-native-paper';

import { styles } from './styles';
import { useTheme } from '../../theme';

type Rules = {
  required?:
    | string
    | {
        value: boolean;
        message: string;
      };
  pattern?: {
    value: RegExp;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
};

type Props = ComponentProps<typeof TextInput> & {
  label: string;
  name: string;
  rules?: Rules;
  keyboardType?: 'default' | 'email-address' | 'numeric';
};

export default function FormInput({
  name,
  label,
  rules = { required: `${label} is required` },
  keyboardType = 'default',
  right,
  ...props
}: Props) {
  const form = useFormContext();
  const { field, fieldState } = useController({
    control: form.control,
    name,
    rules: {
      ...rules,
    },
  });
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        {...field}
        {...props}
        label={label}
        mode="outlined"
        onChangeText={field.onChange}
        keyboardType={keyboardType}
        autoCapitalize="none"
        right={right && right}
      />
      {/* <HelperText type="error" visible={!!fieldState.error}>
        {fieldState.error?.message}
      </HelperText> */}
      {fieldState.error && (
        <Text
          variant="labelSmall"
          style={styles.error}
          theme={{ colors: { onSurface: colors.error } }}
        >
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
}
