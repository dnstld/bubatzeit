import { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { data } from '../../../mock';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function Map() {
  const [selectedItem, setSelectedItem] = useState(0);
  const isCarrousel = useRef(null);

  const onMarkerSelected = (marker: any) => {};

  const renderItem = ({ item }) => (
    <Card key={item.id}>
      <Card.Title
        title={item.title}
        titleVariant="titleSmall"
        subtitle={item.description}
        subtitleVariant="bodySmall"
        left={(props) => <Avatar.Image size={42} source={item.image!} />}
      />
    </Card>
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={data.region}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
      >
        {data.state.markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinates}
              onPress={() => onMarkerSelected(marker)}
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
        data={data.state.markers}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setSelectedItem(index)}
        containerCustomStyle={styles.scrollView}
        activeSlideAlignment="start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 32,
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,100,0, 0.3)',
    zIndex: 1,
  },
  selected: {
    backgroundColor: 'rgba(0,100,0, 1)',
  },
});
