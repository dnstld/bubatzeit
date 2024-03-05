import { View, Text } from 'react-native';

export default function Details({ route }: { route: any }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Details: {JSON.stringify(itemId)} , {JSON.stringify(otherParam)}
      </Text>
    </View>
  );
}
