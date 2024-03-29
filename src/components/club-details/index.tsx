import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import ClubAvatar from '../club-avatar';

type Props = {
  club: {
    title: string;
    address: {
      street: string;
      postalCode: string;
      phoneNumber: string;
    };
    coordinates: {
      latitude: number;
      longitude: number;
    };
    description: string;
    image: any;
  };
  showMap?: boolean;
  bottomCta?: () => void;
};

export default function ClubDetails({
  club,
  showMap = true,
  bottomCta,
}: Props) {
  const { title, address, coordinates } = club!;

  return (
    <View style={styles.container}>
      {showMap && (
        <MapView
          initialRegion={{
            ...coordinates,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
        >
          <Marker coordinate={coordinates}>
            <Icon name="map-marker" color={'green'} size={48} />
          </Marker>
        </MapView>
      )}

      <Card mode="contained" theme={{ colors: { surfaceVariant: 'white' } }}>
        <ClubAvatar title={title} address={address} showDots={false} />
        <Card.Content>
          <Text>Address</Text>
          <Text>{`${address.street} ${address.postalCode}`}</Text>
          <Text>{address.phoneNumber}</Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="close" mode="outlined" onPress={bottomCta}>
            Close Details
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
