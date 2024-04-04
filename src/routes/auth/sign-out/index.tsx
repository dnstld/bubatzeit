import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';
import { ScreenProps as AuthScreenProps } from '../__layout/types';

export const SignOut = ({}: AuthScreenProps<'SignOut'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Abmelden</Text>
    </SafeAreaView>
  );
};
