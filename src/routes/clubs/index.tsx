import { useQuery, gql } from '@apollo/client';
import { FlatList, SafeAreaView } from 'react-native';
import { Avatar, Card, Divider } from 'react-native-paper';

import { styles } from './styles';

const GET_CLUBS = gql`
  query clubs {
    clubs {
      id
      coordinates {
        latitude
        longitude
      }
      address {
        street
        postalCode
        phoneNumber
      }
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

  const sortedData = [...data.clubs].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sortedData}
        renderItem={({ item }) => (
          <Card
            key={item.id}
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
