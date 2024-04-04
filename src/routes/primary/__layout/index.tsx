import {
  MaterialBottomTabNavigationOptions,
  createMaterialBottomTabNavigator,
} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ParamList } from './types';
import { Clubs as ClubsScreen } from '../clubs';
import { Home as HomeScreen } from '../home';
import { Map as MapScreen } from '../map';

const Tab = createMaterialBottomTabNavigator<ParamList>();

export const Primary = () => {
  return (
    <Tab.Navigator id="Primary">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: HomeIcon }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{ tabBarIcon: MapIcon }}
      />
      <Tab.Screen
        name="Clubs"
        component={ClubsScreen}
        options={{ tabBarIcon: ClubsIcon }}
      />
    </Tab.Navigator>
  );
};

const HomeIcon: MaterialBottomTabNavigationOptions['tabBarIcon'] = ({
  focused,
  color,
}) => <Icon name={focused ? 'home' : 'home-outline'} color={color} size={24} />;

const ClubsIcon: MaterialBottomTabNavigationOptions['tabBarIcon'] = ({
  focused,
  color,
}) => (
  <Icon
    name={focused ? 'view-list' : 'view-list-outline'}
    color={color}
    size={24}
  />
);

const MapIcon: MaterialBottomTabNavigationOptions['tabBarIcon'] = ({
  focused,
  color,
}) => <Icon name={focused ? 'map' : 'map-outline'} color={color} size={24} />;
