import { openURL } from 'expo-linking';
import { ScrollView, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
  Button,
  Card,
  Chip,
  Divider,
  List,
  Surface,
  Text,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

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
      isEmailVerified: boolean;
      website: string;
      email: string;
      phoneNumber: string;
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
        {address && (
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
        )}

        <Card mode="contained" theme={{ colors: { surfaceVariant: 'white' } }}>
          <CardTitle
            title={title}
            subtitle={
              address
                ? `${address.street}, ${address.postalCode}`
                : 'Digital Club'
            }
            imageUri={image.uri}
          />
          <Card.Content>
            <Surface style={styles.description} elevation={4}>
              <Text>{description}</Text>
            </Surface>

            <List.Item
              title={profile.phoneNumber}
              onPress={() => openURL(profile.phoneNumber)}
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
              right={(props) =>
                profile.isEmailVerified ? (
                  <Chip {...props} icon="email-check">
                    Verified
                  </Chip>
                ) : (
                  <Chip {...props} icon="email-send">
                    Verify
                  </Chip>
                )
              }
            />
            <List.Item
              title={profile.website}
              onPress={() => openURL(profile.website)}
              left={(props) => (
                <List.Icon {...props} style={styles.listIcon} icon="web" />
              )}
            />

            <Divider style={styles.divider} />

            <Text variant="titleSmall" style={styles.title}>
              Folge uns:
            </Text>
            <View style={styles.socialContainer}>
              <Button
                icon={() => <Icon name="instagram" size={24} color="#ffffff" />}
                mode="contained"
                buttonColor="#515BD4"
                onPress={() => openURL(groups.telegram)}
              >
                Instagram
              </Button>

              <Button
                icon={() => <Icon name="facebook" size={24} color="#ffffff" />}
                mode="contained"
                buttonColor="#0866ff"
                onPress={() => openURL('https://www.facebook.com/')}
              >
                Facefook
              </Button>
            </View>

            <Divider style={styles.divider} />

            <Text variant="titleSmall" style={styles.title}>
              Trete unserer Gruppe bei:
            </Text>
            <View style={styles.socialContainer}>
              <Button
                icon={() => <Icon name="telegram" size={24} color="#ffffff" />}
                mode="contained"
                buttonColor="#3b5998"
                onPress={() => openURL(groups.telegram)}
              >
                Telegram
              </Button>
              <Button
                icon={() => <Icon name="whatsapp" size={24} color="#ffffff" />}
                mode="contained"
                buttonColor="#25d366"
                onPress={() => openURL(groups.whatsapp)}
              >
                Whatsapp
              </Button>
            </View>

            <Divider style={styles.divider} />

            <Text variant="titleSmall" style={styles.title}>
              Öffnungszeiten:
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
                  {hour.open && hour.close ? (
                    <>
                      <Text variant="bodySmall" style={styles.openingHoursText}>
                        {hour.open}
                      </Text>
                      <Text style={styles.openingHoursText}>{hour.close}</Text>
                    </>
                  ) : (
                    <>
                      <Text variant="bodySmall" style={styles.openingHoursText}>
                        ---
                      </Text>
                      <Text variant="bodySmall" style={styles.openingHoursText}>
                        ---
                      </Text>
                    </>
                  )}
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
