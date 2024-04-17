import React, { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';

import { useTheme } from '../../theme';

type Props = ComponentProps<typeof TextInput>;

export const ClubNameInput = ({
  testID = 'ClubNameInput',
  returnKeyType = 'next',
  ...rest
}: Props) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'components.clubNameInput',
  });
  const { colors } = useTheme();

  return (
    <TextInput
      testID={testID}
      label={t('label')}
      mode="outlined"
      right={
        rest.error && (
          <TextInput.Icon icon="alert-circle" color={colors.error} />
        )
      }
      autoCorrect={false}
      returnKeyType={returnKeyType}
      maxLength={128}
      enablesReturnKeyAutomatically
      {...rest}
    />
  );
};
