import { useQuery, gql } from '@apollo/client';
import { FlatList, SafeAreaView } from 'react-native';
import { Card, Divider } from 'react-native-paper';

import { styles } from './styles';
import CardTitle from '../../../components/card-title';
import { ScreenProps as PrimaryScreenProps } from '../__layout/types';

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
      openingHours {
        day
        open
        close
      }
    }
  }
`;

export const Clubs = ({ navigation }: PrimaryScreenProps<'Clubs'>) => {
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
                id: item.id,
              });
            }}
          >
            <CardTitle
              title={item.title}
              subtitle={`${item.address.street}, ${item.address.postalCode}`}
              showDots
            />
          </Card>
        )}
        ItemSeparatorComponent={Divider}
        ListHeaderComponentStyle={styles.listHeader}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};
