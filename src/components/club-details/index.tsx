import { openURL } from 'expo-linking';
import { ScrollView, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, Divider, List, Text } from 'react-native-paper';

import { styles } from './styles';
import { useTheme } from '../../theme';
import CardTitle from '../card-title';
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
    image: {
      uri: string;
    };
    openingHours: {
      day: string;
      open: string;
      close: string;
    }[];
    profile: {
      website: string;
      email: string;
      phone: string;
    };
    groups: {
      telegram: string;
      whatsapp: string;
    };
  };
};

export default function ClubDetails({ club }: Props) {
  const {
    title,
    address,
    coordinates,
    description,
    image,
    openingHours,
    profile,
    groups,
  } = club;

  const { colors } = useTheme();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <MapView
          initialRegion={{
            ...coordinates,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
          loadingEnabled
        >
          <Marker coordinate={coordinates}>
            <WeedSvg map color={colors.primary} />
          </Marker>
        </MapView>

        <Card mode="contained" theme={{ colors: { surfaceVariant: 'white' } }}>
          <CardTitle
            title={title}
            subtitle={`${address.street}, ${address.postalCode}`}
            imageUri={image.uri}
          />
          <Card.Content>
            <Text variant="titleMedium" style={styles.title}>
              Description:
            </Text>
            <Text>{description}</Text>

            <Divider style={styles.divider} />

            <Text variant="titleMedium" style={styles.title}>
              Contact:
            </Text>
            <List.Item
              title={profile.phone}
              onPress={() => openURL(profile.phone)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="phone" />
              )}
            />
            <List.Item
              title={profile.email}
              onPress={() => openURL(profile.email)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="email" />
              )}
            />
            <List.Item
              title={profile.website}
              onPress={() => openURL(profile.website)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="web" />
              )}
            />

            <Divider style={styles.divider} />

            <Text variant="titleMedium" style={styles.title}>
              Join our group:
            </Text>
            <List.Item
              title="Telegram"
              onPress={() => openURL(groups.telegram)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="chat" />
              )}
            />
            <List.Item
              title="WhatsApp"
              onPress={() => openURL(groups.whatsapp)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="chat" />
              )}
            />

            <Divider style={styles.divider} />

            <Text variant="titleMedium" style={styles.title}>
              Opening hours:
            </Text>
            <View>
              {openingHours.map((hour, index) => (
                <View style={styles.openingHours} key={index}>
                  <Text
                    variant="titleSmall"
                    style={[styles.openingHoursText, styles.openingHoursTitle]}
                  >
                    {hour.day}
                  </Text>
                  <Text variant="bodySmall" style={styles.openingHoursText}>
                    {hour.open}
                  </Text>
                  <Text style={styles.openingHoursText}>{hour.close}</Text>
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
