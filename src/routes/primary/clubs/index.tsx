import { useQuery, gql } from '@apollo/client';
import { SafeAreaView, SectionList } from 'react-native';
import { Card, Divider, HelperText } from 'react-native-paper';

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

  const sortedClubs = [...data.clubs].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  const getSectionHeader = (club) => {
    return club.title.charAt(0).toUpperCase();
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <HelperText type="info" disabled>
        {section.title}
      </HelperText>
    );
  };

  const renderItem = ({ item }) => {
    return (
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
    );
  };

  const sections = sortedClubs.reduce((acc, club) => {
    const sectionHeader = getSectionHeader(club);
    if (!acc[sectionHeader]) {
      acc[sectionHeader] = [];
    }
    acc[sectionHeader].push(club);
    return acc;
  }, {});

  const sectionArray = Object.keys(sections).map((key) => ({
    title: key,
    data: sections[key],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionArray}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
};
