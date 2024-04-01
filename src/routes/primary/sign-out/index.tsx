import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';

export default function SignOutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Abmelden</Text>
    </SafeAreaView>
  );
}
