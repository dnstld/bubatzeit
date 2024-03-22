import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, Card, useTheme } from 'react-native-paper';

import { styles } from './styles';
import ClubAvatar from '../club-avatar';
import WeedSvg from '../weed-svg';

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
  const { colors } = useTheme();

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
            <WeedSvg size={48} color={colors.primary} />
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
