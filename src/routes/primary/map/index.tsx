import { gql, useQuery } from '@apollo/client';
import { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, Chip } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      profile {
        isEmailVerified
        website
        phoneNumber
      }
      groups {
        telegram
        whatsapp
      }
    }
  }
`;

export const Map = ({ navigation }: PrimaryScreenProps<'Map'>) => {
  const { colors } = useTheme();
  const { loading, error, data } = useQuery(GET_CLUBS);

  const carrouselRef = useRef(null);

  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);

  const onSelectClub = (clubId: string) => {
    navigation.navigate('Details', {
      id: clubId,
    });
  };

  const _renderItem = ({ item }) => {
    console.log('item', item);
    return (
      <Card key={item.id} onPress={() => onSelectClub(item.id)}>
        <CardTitle
          title={item.title}
          subtitle={
            item.address && `${item.address.street}, ${item.address.postalCode}`
          }
          imageUri={item.image?.uri}
          showDots
        />
        <Card.Content>
          <View style={[styles.badges, styles.space]}>
            {!item.profile?.isEmailVerified ? (
              <Chip icon="email-remove" disabled>
                Not Verified
              </Chip>
            ) : (
              <>
                <Chip icon="email-check">Verified</Chip>
                <View style={styles.badges}>
                  {item.profile?.phoneNumber && (
                    <Icon name="phone" size={16} color={colors.primary} />
                  )}
                  {item.profile?.website && (
                    <Icon name="web" size={16} color={colors.primary} />
                  )}
                  {item.groups && (
                    <Icon name="chat" size={16} color={colors.primary} />
                  )}
                </View>
              </>
            )}
          </View>
        </Card.Content>
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
