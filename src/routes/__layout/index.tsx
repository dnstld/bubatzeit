import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IconButton } from 'react-native-paper';

import { ParamList } from './types';
import { useTheme } from '../../theme';
import { Auth as AuthStack } from '../auth/__layout';
import { Details as DetailsScreen } from '../details/[id]';
import { Primary as PrimaryStack } from '../primary/__layout';
import { Profile as ProfileStack } from '../profile/__layout';

export const Stack = createNativeStackNavigator<ParamList>();

export const Root = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator id="Root">
      <Stack.Screen
        name="Primary"
        component={PrimaryStack}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerRight: () => (
            <IconButton
              icon="close"
              size={24}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      >
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileStack} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
