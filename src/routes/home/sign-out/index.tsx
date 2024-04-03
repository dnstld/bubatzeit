import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';
import { ScreenProps as HomeScreenProps } from '../__layout/type';

export const SignOutScreen = ({}: HomeScreenProps<'SignOut'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Abmelden</Text>
    </SafeAreaView>
  );
};
