import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

import { ParamList } from './type';
import { LocationScreen } from '../location';
import { PasswordForgottenScreen } from '../password-forgotten';
import { PrimaryScreen } from '../primary';
import { ProfileScreen } from '../profile';
import { RegisterScreen } from '../register';
import { ResetPasswordScreen } from '../reset-password';
import { SignInScreen } from '../sign-in';
import { SignOutScreen } from '../sign-out';

const Stack = createNativeStackNavigator<ParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Primary"
        component={PrimaryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Anmeldenrung',
          })}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Registrierung',
          })}
        />
        <Stack.Screen
          name="SignOut"
          component={SignOutScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Abmelden',
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Dein profil',
          })}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Clubadresse',
          })}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={({ navigation }) => ({
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
        />
        <Stack.Screen
          name="PasswordForgotten"
          component={PasswordForgottenScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <IconButton
                icon="close"
                size={24}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
            title: 'Password zurücksetzen',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
