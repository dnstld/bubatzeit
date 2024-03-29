import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign up</Text>
    </SafeAreaView>
  );
}
