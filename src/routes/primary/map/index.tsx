import { gql, useQuery } from '@apollo/client';
import { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import { styles } from './styles';
import CardTitle from '../../../components/card-title';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';
import { ScreenProps as PrimaryScreenProps } from '../__layout/types';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const INITIAL_REGION = {
  latitude: 52.520008,
  longitude: 13.404954,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3,
};

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
export const Map = ({ navigation }: PrimaryScreenProps<'Map'>) => {
  const { loading, error, data } = useQuery(GET_CLUBS);

  const carrouselRef = useRef(null);

  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);
  const { colors } = useTheme();

  const onSelectClub = (clubId: string) => {
    navigation.navigate('Details', {
      id: clubId,
    });
  };

  const _renderItem = ({ item }) => {
    return (
      <Card key={item.id} onPress={() => onSelectClub(item.id)}>
        <CardTitle
          title={item.title}
          subtitle={`${item.address.street}, ${item.address.postalCode}`}
          imageUri={item.image?.uri}
          showDots
        />
      </Card>
    );
  };

  if (loading) return null;
  if (error) return null;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={INITIAL_REGION}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
        loadingEnabled
      >
        {data.clubs.map((club, index) => {
          return (
            <Marker
              key={club.id}
              coordinate={club.coordinates}
              onPress={() => onSelectClub(club.id)}
            >
              {selectedCarouselItem === index && styles.selected ? (
                <WeedSvg map size={64} />
              ) : (
                <WeedSvg map size={32} />
                // <WeedSvg size={32} color={colors.primary} />
              )}
            </Marker>
          );
        })}
      </MapView>

      <Carousel
        ref={carrouselRef}
        data={data.clubs}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setSelectedCarouselItem(index)}
        containerCustomStyle={styles.scrollView}
        activeSlideAlignment="start"
        vertical={false}
      />
    </View>
  );
};
