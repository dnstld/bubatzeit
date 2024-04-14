import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './styles';
import AuthHeader from '../../../components/auth-header';
import { ScreenProps as AuthScreenProps } from '../__layout/types';

export const SignOut = ({}: AuthScreenProps<'SignOut'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader title="Abmelden" />
    </SafeAreaView>
  );
};
