import React, { ComponentProps } from 'react';
import { TextInput } from 'react-native-paper';

import { useTheme } from '../../theme';

type Props = ComponentProps<typeof TextInput>;

export const DescriptionInput = ({
  testID = 'DescriptionInput',
  ...rest
}: Props) => {
  const { colors } = useTheme();

  return (
    <TextInput
      testID={testID}
      label="Vereinsbeschreibung"
      mode="outlined"
      right={
        rest.error && (
          <TextInput.Icon icon="alert-circle" color={colors.error} />
        )
      }
      autoCorrect={false}
      returnKeyType="none"
      maxLength={300}
      multiline
      numberOfLines={3}
      enablesReturnKeyAutomatically
      {...rest}
    />
  );
};
