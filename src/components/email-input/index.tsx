import React, { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';

import { useTheme } from '../../theme';

type Props = ComponentProps<typeof TextInput>;

export const EmailInput = ({
  testID = 'EmailInput',
  returnKeyType = 'next',
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <TextInput
      testID={testID}
      label="E-mail"
      mode="outlined"
      right={
        rest.error && (
          <TextInput.Icon icon="alert-circle" color={colors.error} />
        )
      }
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      returnKeyType={returnKeyType}
      maxLength={128}
      enablesReturnKeyAutomatically
      autoComplete="email"
      {...rest}
    />
  );
};
