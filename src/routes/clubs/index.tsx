import { useQuery, gql } from '@apollo/client';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-paper';

const GET_CLUBS = gql`
  query GetClubs {
    clubs {
      id
      title
      description
      image {
        uri
      }
    }
  }
`;

// @ts-ignore
export default function Clubs({ navigation }) {
  const { loading, error, data } = useQuery(GET_CLUBS);

  if (loading) return null;
  if (error) return null;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.clubs}
        renderItem={({ item, index }) => (
          <Card
            key={index}
            mode="contained"
            theme={{ colors: { surfaceVariant: 'white' } }}
            onPress={() => {
              navigation.navigate('Details', {
                id: item.id,
              });
            }}
          >
            <Card.Title
              title={item.title}
              titleVariant="titleSmall"
              subtitle={item.description}
              subtitleVariant="bodySmall"
              left={() => <Avatar.Image size={42} source={item.image!} />}
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
