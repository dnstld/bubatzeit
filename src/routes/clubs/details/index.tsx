import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Avatar, Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';

const GET_CLUB = gql`
  query GetClub($id: ID!) {
    club(id: $id) {
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

export default function Details({
  route: {
    params: { id },
  },
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { loading, error, data } = useQuery(GET_CLUB, {
    variables: { id },
  });

  if (loading) return null;
  if (error) return null;

  const { title, address, coordinates, description, image } = data?.club;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <MapView
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={styles.map}
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
          left={() => <Avatar.Image size={42} source={image} />}
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
