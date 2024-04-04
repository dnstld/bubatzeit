import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ParamList } from './types';
import { Club as ClubScreen } from '../club';
import { Location as LocationScreen } from '../location';

const Stack = createNativeStackNavigator<ParamList>();

export const Profile = () => {
  return (
    <Stack.Navigator id="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Club" component={ClubScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  );
};
