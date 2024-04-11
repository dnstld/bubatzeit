import { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Text, IconButton, Switch } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import CardTitle from '../../../components/card-title';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';
import { ScreenProps as PrimaryScreenProps } from '../__layout/types';

export const Home = ({ navigation }: PrimaryScreenProps<'Home'>) => {
  const { colors } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [showOnMap, setShowOnMap] = useState(false);

  const onShowOnMap = () => {
    setShowOnMap(!showOnMap);
    navigation.navigate('Profile', { screen: 'Location' });
  };

  const onLogout = () => {
    setLoggedIn(false);
    navigation.navigate('Auth', { screen: 'SignOut' });
  };

  const onSignIn = () => {
    setLoggedIn(true);
    navigation.navigate('Auth', { screen: 'SignIn' });
  };

  const onRegister = () => {
    navigation.navigate('Auth', { screen: 'Register' });
  };

  const onEditProfile = () => {
    navigation.navigate('Profile', { screen: 'Club' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text variant="headlineLarge" style={styles.bubatzeit}>
            BUBATZEIT
          </Text>
          <Text variant="headlineSmall">
            Berlin modernstes Finder portal für Cannabis Social Clubs.
          </Text>
          <View style={styles.description}>
            <WeedSvg map color={colors.primary} size={32} />
            <Text theme={{ colors: { onSurface: colors.primary } }}>
              Entspannt einen cannabis club finden.
            </Text>
          </View>
        </View>

        {loggedIn ? (
          <Card mode="contained">
            <CardTitle
              title="East Side Herbal Hub"
              subtitle="eastside@herbalhub.com"
              right={(props: any) => (
                <IconButton
                  {...props}
                  icon="logout"
                  iconColor={colors.error}
                  onPress={onLogout}
                />
              )}
            />
            <Card.Actions>
              <View style={styles.switch}>
                <Switch value={showOnMap} onValueChange={onShowOnMap} />
                <Text variant="labelSmall">Auf Karte zeigen</Text>
              </View>
              {/* <Button icon="map-outline" onPress={onAddLocation}>
                Auf Karte zeigen
              </Button> */}
              <Button
                icon="circle-edit-outline"
                mode="outlined"
                onPress={onEditProfile}
              >
                Profil
              </Button>
            </Card.Actions>
          </Card>
        ) : (
          <Card>
            <CardTitle
              title="Dein Club"
              subtitle="Registriere dich jetzt kostenlos auf unserer App."
              type="icon"
            />
            {/* <Card.Content>
              <Text>Registriere dich jetzt kostenlos auf unserer App.</Text>
            </Card.Content> */}
            <Card.Actions>
              <Button icon="login" onPress={onSignIn}>
                Anmelden
              </Button>
              <Button icon="account-plus" onPress={onRegister}>
                Registrieren
              </Button>
            </Card.Actions>
          </Card>
        )}
      </View>
    </SafeAreaView>
  );
};
