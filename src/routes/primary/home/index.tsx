import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import {
  Button,
  Card,
  Text,
  IconButton,
  Switch,
  Banner,
  Menu,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import CardTitle from '../../../components/card-title';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';
import { ScreenProps as PrimaryScreenProps } from '../__layout/types';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

const isEmailVerified = false;

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

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    closeMenu();
  };

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={{ alignItems: 'flex-end' }}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<IconButton icon="earth" onPress={openMenu} />}
            overlayAccessibilityLabel="Close change language"
          >
            <Menu.Item
              leadingIcon="redo"
              onPress={() => changeLanguage('en')}
              title="Ingles"
            />
            <Menu.Item
              leadingIcon="redo"
              onPress={() => changeLanguage('de')}
              title="Deutch"
            />
            <Menu.Item
              leadingIcon="redo"
              onPress={() => changeLanguage('pt')}
              title="Portuguese"
            />
          </Menu>
        </View>

        {isEmailVerified && (
          <Banner
            visible={true}
            actions={[
              {
                label: 'Bestätigungs-E-Mail anfordern',
                onPress: () => {},
              },
              // {
              //   label: 'E-Mail-Adresse bestätigen',
              //   onPress: () => {},
              // },
            ]}
            icon={({ size }) => (
              <Icon name="email" size={size} color={colors.error} />
            )}
          >
            Wenn du deine E-Mail-Adresse bestätigen möchtest, öffne bitte die
            Bestätigungs-E-Mail mit dem Link (und Code) auf deinem Smartphone,
            auf dem die App installiert ist, und nutze dazu eine E-Mail-App.
          </Banner>
        )}

        <View>
          <Text variant="headlineLarge" style={styles.bubatzeit}>
            {t('bubatzeit')}
          </Text>
          <Text variant="headlineSmall">{t('description')}</Text>
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
