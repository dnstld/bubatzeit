import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';

import { styles } from './styles';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
}
