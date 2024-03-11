import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { IconButton, PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home, Map, Clubs as Club, Details } from './screens';

const Stack = createNativeStackNavigator();

function Clubs() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Clubs in Berlin" component={Club} />
        <Stack.Screen
          name="Details"
          component={Details}
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
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
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
            component={Map}
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
            component={Clubs}
            options={{
              tabBarLabel: 'Clubs',
              tabBarIcon: ({ color }) => (
                <Icon name="format-list-bulleted" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
