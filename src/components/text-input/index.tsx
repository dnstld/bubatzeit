import React, { ComponentProps } from 'react';
import { TextInput as RNTextInput } from 'react-native-paper';

import { useTheme } from '../../theme';

type Props = ComponentProps<typeof RNTextInput>;

export const TextInput = ({ testID = 'TextInput', ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <RNTextInput
      testID={testID}
      mode="outlined"
      right={
        rest.error && (
          <RNTextInput.Icon icon="alert-circle" color={colors.error} />
        )
      }
      autoCorrect={false}
      enablesReturnKeyAutomatically
      {...rest}
    />
  );
};
