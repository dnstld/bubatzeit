import { useState } from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import CardTitle from '../../components/card-title';
import { useTheme } from '../../theme';

export default function HomeScreen() {
  const { colors } = useTheme();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {loggedIn ? (
        <Card>
          <CardTitle
            title="East Side Herbal Hub"
            subtitle="eastside@herbalhub.com"
          />
          <Card.Actions>
            <Button icon="logout" textColor={colors.error}>
              Sign out
            </Button>
            <Button icon="circle-edit-outline">Edit details</Button>
          </Card.Actions>
        </Card>
      ) : (
        <Card>
          <CardTitle title="Your club" subtitle="Register now" type="icon" />
          <Card.Content>
            <Text>Be part of the best Berlin weed club finder App.</Text>
          </Card.Content>
          <Card.Actions>
            <Button icon="login">Sign in</Button>
            <Button icon="account-plus">Register</Button>
          </Card.Actions>
        </Card>
      )}
    </SafeAreaView>
  );
}
