import { gql, useQuery } from '@apollo/client';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import { styles } from './styles';
import ClubDetails from '../../components/club-details';

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
    }
  }
`;

export default function Map() {
  const { loading, error, data } = useQuery(GET_CLUBS);

  const carrouselRef = useRef(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const [selectedCarouselItem, setSelectedCarouselItem] = useState(0);
  const [selectedClub, setSelectedClub] = useState({});

  const snapPoints = useMemo(() => ['75%'], []);

  const onSelectClub = (club) => {
    setSelectedClub(club);
    bottomSheetModalRef.current?.present();
  };

  const _renderItem = ({ item, index }) => (
    <Card key={item.id} onPress={() => onSelectClub(item)}>
      <Card.Title
        title={item.title}
        titleVariant="titleSmall"
        subtitle={item.description}
        subtitleVariant="bodySmall"
        left={() => <Avatar.Image size={42} source={item.image} />}
      />
    </Card>
  );

  if (loading) return null;
  if (error) return null;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={INITIAL_REGION}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
      >
        {data.clubs.map((club, index) => {
          return (
            <Marker
              key={club.id}
              coordinate={club.coordinates}
              onPress={() => onSelectClub(club)}
              pinColor={selectedCarouselItem === index ? 'black' : 'lime'}
            />
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

      <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
          <ClubDetails club={selectedClub} showMap={false} />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
