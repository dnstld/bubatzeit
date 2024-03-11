import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Details({
  route: {
    params: { club },
  },
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { title, description, image, coordinates, address } = club;

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <MapView
        region={{
          ...coordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={{ height: 250 }}
      >
        <Marker coordinate={coordinates}>
          <Icon name="map-marker" color={'green'} size={48} />
        </Marker>
      </MapView>

      <Card mode="contained" theme={{ colors: { surfaceVariant: 'white' } }}>
        <Card.Title
          title={title}
          subtitle={description}
          subtitleNumberOfLines={0}
          left={(props) => <Avatar.Image size={42} source={image} />}
        />
        <Card.Content>
          <Text>Address</Text>
          <Text>{`${address.street} ${address.postalCode}`}</Text>
          <Text>{address.phoneNumber}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            icon="phone"
            mode="contained"
            onPress={() => {
              navigation.goBack();
            }}
          >
            Call now
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
