import React, { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';

import { useTheme } from '../../theme';

type Props = ComponentProps<typeof TextInput>;

export const ClubNameInput = ({
  testID = 'ClubNameInput',
  returnKeyType = 'next',
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <TextInput
      testID={testID}
      label="Club name"
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
