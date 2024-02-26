import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Home, Map } from './src/screens';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
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
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
