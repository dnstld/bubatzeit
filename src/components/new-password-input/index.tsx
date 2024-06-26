import { zxcvbn, ZxcvbnResult } from '@zxcvbn-ts/core';
import React, { ComponentProps, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { ProgressBar, Text } from 'react-native-paper';

import { styles } from './styles';
import { useTheme } from '../../theme';
import { PasswordInput } from '../password-input';
import WeedSvg from '../weed-svg';

type Props = ComponentProps<typeof PasswordInput> & {
  email: string;
  onError?: (error: string) => void;
};

export const NewPasswordInput = ({
  testID = 'NewPasswordInput',
  onChangeText,
  email,
  onError,
  ...rest
}: Props) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'components.newPasswordInput',
  });
  const { colors } = useTheme();
  const [zxcvbnResult, setZxcvbnResult] = useState<ZxcvbnResult>({} as any);

  const onChange = (password: string) => {
    const result = zxcvbn(password, [email]);
    setZxcvbnResult(result);

    if (!password) onError?.('Required');
    else if (result.score < 3)
      onError?.(result.feedback.suggestions.join('\n'));
    else onError?.('');
    onChangeText?.(password);
  };

  const getPasswordScore = (score: number = 0) => {
    const scoreMap: { [key: number]: { color: string; text: string } } = {
      0: {
        color: colors.onBackground,
        text: t('veryWeak'),
      },
      1: {
        color: colors.error,
        text: t('weak'),
      },
      2: {
        color: colors.error,
        text: t('medium'),
      },
      3: {
        color: colors.primary,
        text: t('strong'),
      },
      4: {
        color: colors.primary,
        text: t('veryStrong'),
      },
    };
    return scoreMap[score];
  };

  const getProgressBar = (index: number) => {
    return (
      <ProgressBar
        progress={Number(index < zxcvbnResult.score)}
        color={getPasswordScore(zxcvbnResult.score).color}
        style={styles.progressBar}
        key={index}
      />
    );
  };

  return (
    <>
      <PasswordInput
        onChangeText={onChange}
        passwordRules={`minLength: 8; maxLength: 64;`}
        textContentType="newPassword"
        {...rest}
      />
      <View style={styles.progressBarContainer}>
        {Array.from({ length: 4 }).map((_, index) => getProgressBar(index))}
      </View>
      {!zxcvbnResult.score ? (
        <View>
          <Text>{t('strength.title')}</Text>
          <Text>{t('strength.description')}</Text>
        </View>
      ) : (
        <View style={styles.score}>
          <WeedSvg
            size={16}
            color={getPasswordScore(zxcvbnResult.score).color}
          />
          <Text>
            {t('strength.label')} {getPasswordScore(zxcvbnResult.score).text}
          </Text>
        </View>
      )}
    </>
  );
};
