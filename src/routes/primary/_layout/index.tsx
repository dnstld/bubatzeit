import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../home';
import LocationScreen from '../location';
import PasswordForgottenScreen from '../password-forgotten';
import ProfileScreen from '../profile';
import RegisterScreen from '../register';
import ResetPasswordScreen from '../reset-password';
import SignInScreen from '../sign-in';
import SignOutScreen from '../sign-out';

const Stack = createNativeStackNavigator();

export const PrimaryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign in"
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
          name="Sign out"
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
          name="Reset password"
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
          name="Password Forgotten"
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

export const Tab = createMaterialBottomTabNavigator<ParamsList>();

export default function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={PrimaryScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="home" color={color} size={26} />
            ) : (
              <Icon name="home-outline" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStack}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Icon name="map" color={color} size={26} />
            ) : (
              <Icon name="map-outline" color={color} size={26} />
            ),
        }}
      />
      <Tab.Screen
        name="Clubs"
        component={ClubsStack}
        options={{
          tabBarLabel: 'Clubs',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-bulleted" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
