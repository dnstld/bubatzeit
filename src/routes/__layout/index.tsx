import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ParamList } from './type';
import { ClubsStack } from '../clubs/__layout';
import { HomeStack } from '../home/__layout';
import { MapStack } from '../map/__layout';

export const Tab = createMaterialBottomTabNavigator<ParamList>();

export const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
};
