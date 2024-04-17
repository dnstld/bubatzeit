import React, { ComponentProps, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';

type Props = ComponentProps<typeof TextInput>;

export const PasswordInput = ({ testID = 'PasswordInput', ...rest }: Props) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'components.passwordInput',
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <TextInput
      testID={testID}
      label={t('label')}
      mode="outlined"
      right={
        <TextInput.Icon
          icon={secureTextEntry ? 'eye' : 'eye-off'}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        />
      }
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      returnKeyType="done"
      maxLength={128}
      enablesReturnKeyAutomatically
      autoComplete="password"
      {...rest}
    />
  );
};
