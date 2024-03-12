import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ParamsList } from './type';
import { Home, Map, Clubs as Club, Details } from '../../routes';

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

export const Tab = createMaterialBottomTabNavigator<ParamsList>();

export default function Root() {
  return (
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
  );
}
