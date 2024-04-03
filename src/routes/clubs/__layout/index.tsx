import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';

import { ParamList } from './type';
import { DetailsScreen } from '../../details/[id]';
import { PrimaryScreen } from '../primary';

const Stack = createNativeStackNavigator<ParamList>();

export const ClubsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Primary" component={PrimaryScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
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
            title: 'Clubdetails',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
