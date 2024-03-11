import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-paper';

import { data } from '../../../mock';

export default function Clubs({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.state.markers}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            mode="contained"
            theme={{ colors: { surfaceVariant: 'white' } }}
            onPress={() => {
              navigation.navigate('Details', {
                club: item,
              });
            }}
          >
            <Card.Title
              title={item.title}
              titleVariant="titleSmall"
              subtitle={item.description}
              subtitleVariant="bodySmall"
              left={(props) => <Avatar.Image size={42} source={item.image!} />}
            />
          </Card>
        )}
        ItemSeparatorComponent={Divider}
        ListHeaderComponent={Divider}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
