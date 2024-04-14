import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { IconButton } from 'react-native-paper';

import { ParamList } from './types';
import { Auth as AuthStack } from '../auth/__layout';
import { Details as DetailsScreen } from '../details/[id]';
import { Primary as PrimaryStack } from '../primary/__layout';
import { Profile as ProfileStack } from '../profile/__layout';
import { ParamList as ProfileParamList } from '../profile/__layout/types';

export const Stack = createNativeStackNavigator<ParamList>();

const authScreens = (screen: keyof ParamList) => {
  const mapName: { [key: string]: string } = {
    SignIn: 'Anmeldenrung',
    SignOut: 'Abmelden',
    PasswordReset: 'Passwort zurücksetzen',
    PasswordForgot: 'Password zurücksetzen',
    Register: 'Registrierung',
  };
  return mapName[screen] as keyof ParamList;
};

const profileScreens = (screen: keyof ProfileParamList) => {
  const mapName: { [key: string]: string } = {
    Club: 'Profil',
    Location: 'Adresse suchen',
  };
  return mapName[screen] as keyof ParamList;
};

export const Root = () => {
  return (
    <Stack.Navigator id="Root">
      <Stack.Screen
        name="Primary"
        component={PrimaryStack}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={({ navigation }) => {
          return {
            presentation: 'modal',
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          };
        }}
      >
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={({ route }) => {
            const { screen } = route.params;

            return {
              headerTitle: authScreens(screen as keyof ParamList),
            };
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Club details' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileStack}
          options={({ route }) => {
            const { screen } = route.params;

            return {
              headerTitle: profileScreens(screen as keyof ProfileParamList),
            };
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
