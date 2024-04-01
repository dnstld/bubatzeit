import { useState } from 'react';
import { Button, Card, Text, IconButton, Switch } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import CardTitle from '../../../components/card-title';
import { useTheme } from '../../../theme';

export default function HomeScreen({ navigation }) {
  const { colors } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMapOn, setIsMapOn] = useState(false);

  const onToggleMap = () => {
    setIsMapOn(!isMapOn);
    navigation.navigate('Location');
  };

  const onLogout = () => {
    setLoggedIn(false);
    navigation.navigate('Sign out');
  };

  const onSignIn = () => {
    setLoggedIn(true);
    navigation.navigate('Sign in');
  };

  const onRegister = () => {
    navigation.navigate('Register');
  };

  const onEditProfile = () => {
    navigation.navigate('Profile');
  };

  const onAddLocation = () => {
    navigation.navigate('Location');
  };

  return (
    <SafeAreaView style={styles.container}>
      {loggedIn ? (
        <Card>
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
            {/* <Switch value={isMapOn} onValueChange={onToggleMap} /> */}
            <Button icon="map-outline" onPress={onAddLocation}>
              Show on map
            </Button>
            <Button icon="circle-edit-outline" onPress={onEditProfile}>
              Profile
            </Button>
          </Card.Actions>
        </Card>
      ) : (
        <Card>
          <CardTitle title="Your club" subtitle="Register now" type="icon" />
          <Card.Content>
            <Text>Be part of the best Berlin weed club finder App.</Text>
          </Card.Content>
          <Card.Actions>
            <Button icon="login" onPress={onSignIn}>
              Sign in
            </Button>
            <Button icon="account-plus" onPress={onRegister}>
              Register
            </Button>
          </Card.Actions>
        </Card>
      )}
    </SafeAreaView>
  );
}
