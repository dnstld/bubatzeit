import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Card } from 'react-native-paper';

import { data } from '../../../mock';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2;

export default function Map() {
  const animation = new Animated.Value(0);

  const interpolations = data.state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: 'clamp',
    });
    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: 'clamp',
    });
    return { scale, opacity };
  });

  const onMarkerSelected = (marker: any) => {};

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={data.region}
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        showsUserLocation
        tintColor="red"
      >
        {data.state.markers.map((marker, index) => {
          const scaleStyle = [
            {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            },
          ];
          const opacityStyle = [
            {
              opacity: interpolations[index].opacity,
            },
          ];
          return (
            <Marker
              key={index}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinates}
              onPress={() => onMarkerSelected(marker)}
            >
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        snapToAlignment="center"
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animation,
                },
              },
            },
          ],
          { useNativeDriver: true },
        )}
      >
        {data.state.markers.map((marker, index) => (
          <Card key={index} style={styles.card}>
            <Card.Title
              title={marker.title}
              titleVariant="titleSmall"
              subtitle={marker.description}
              subtitleVariant="bodySmall"
              left={(props) => (
                <Avatar.Image size={42} source={marker.image!} />
              )}
            />
          </Card>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    marginHorizontal: 8,
    width: CARD_WIDTH,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(0,100,0, 1)',
    zIndex: 1,
  },
  ring: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(173,255,47, 0.7)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(173,255,47, 0.5)',
  },
});
