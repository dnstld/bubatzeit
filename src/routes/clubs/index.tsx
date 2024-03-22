import { useQuery, gql } from '@apollo/client';
import { FlatList, SafeAreaView } from 'react-native';
import { Card, Divider } from 'react-native-paper';

import { styles } from './styles';
import ClubAvatar from '../../components/club-avatar';

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
            theme={{ roundness: 0 }}
            onPress={() => {
              navigation.navigate('Details', {
                club: item,
              });
            }}
          >
            <ClubAvatar
              title={item.title}
              address={item.address}
              showDots={false}
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
