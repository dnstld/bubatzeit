import { gql, useQuery } from '@apollo/client';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useMemo, useRef, useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const INITIAL_REGION = {
  latitude: 52.520008,
  longitude: 13.404954,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3,
};

const GET_CLUBS = gql`
  query GetClubs {
    clubs {
      title
      description
      coordinates {
        latitude
        longitude
      }
      image {
        uri
      }
    }
  }
`;

export default function Map() {
  const { loading, error, data } = useQuery(GET_CLUBS);

  const [selectedItem, setSelectedItem] = useState(0);
  const isCarrousel = useRef(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['75%'], []);

  const onMarkerSelected = (marker: any) => {};

  const handleOpenBottomSheetModal = () =>
    bottomSheetModalRef.current?.present();

  const renderItem = ({ item }: { item: any }) => (
    <Card key={item.id} onPress={handleOpenBottomSheetModal}>
      <Card.Title
        title={item.title}
        titleVariant="titleSmall"
        subtitle={item.description}
        subtitleVariant="bodySmall"
        left={() => <Avatar.Image size={42} source={item.image!} />}
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
              key={index}
              title={club.title}
              description={club.description}
              coordinate={club.coordinates}
              onPress={() => onMarkerSelected(club)}
            >
              {selectedItem === index && styles.selected ? (
                <Icon name="leaf-maple" color="#114232" size={42} />
              ) : (
                <Icon name="leaf-maple" color="#87A922" size={26} />
              )}
            </Marker>
          );
        })}
      </MapView>

      <Carousel
        ref={isCarrousel}
        data={data.clubs}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setSelectedItem(index)}
        containerCustomStyle={styles.scrollView}
        activeSlideAlignment="start"
        vertical={false}
      />

      <BottomSheetModal ref={bottomSheetModalRef} snapPoints={snapPoints}>
        <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
