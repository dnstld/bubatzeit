import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Dimensions, SafeAreaView, View } from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { TextInput } from '../../../components/text-input';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';
import { ScreenProps as ProfileScreenProps } from '../__layout/types';

type FormValues = {
  street: string;
  postalCode: string;
  city: string;
};

const coordinates = {
  latitude: 52.52,
  longitude: 13.405,
};

export const Location = ({ navigation }: ProfileScreenProps<'Location'>) => {
  const form = useForm<FormValues>();

  const { colors } = useTheme();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
    navigation.navigate('Primary', { screen: 'Home' });
  });

  const onSearch = () => {
    const street = form.getValues('street');
    const postalCode = form.getValues('postalCode');
    const city = form.getValues('city');
    console.log(`${street}, ${postalCode} ${city}`);
  };

  const { width, height } = Dimensions.get('window');

  const ASPECT_RATIO = width / height;

  const LATITUDE = 0.0922; // 13.404954
  const LONGITUDE = 0.0421; // 52.520008
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  return (
    <FormProvider {...form}>
      <SafeAreaView style={styles.container}>
        <MapView
          initialRegion={{
            ...coordinates,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          style={styles.map}
          loadingEnabled
        >
          <Polygon
            fillColor={'red'}
            coordinates={[
              {
                latitude: LATITUDE + LATITUDE_DELTA / 5,
                longitude: LONGITUDE + LONGITUDE_DELTA / 4,
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 3,
                longitude: LONGITUDE + LONGITUDE_DELTA / 4,
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 4,
                longitude: LONGITUDE + LONGITUDE_DELTA / 2,
              },
            ]}
          />
          <Polyline
            strokeColor={'blue'}
            tappable
            coordinates={[
              {
                latitude: LATITUDE + LATITUDE_DELTA / 5,
                longitude: LONGITUDE - LONGITUDE_DELTA / 4,
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 3,
                longitude: LONGITUDE - LONGITUDE_DELTA / 4,
              },
              {
                latitude: LATITUDE + LATITUDE_DELTA / 4,
                longitude: LONGITUDE - LONGITUDE_DELTA / 2,
              },
            ]}
          />
          <Marker coordinate={coordinates}>
            <WeedSvg color={colors.primary} />
          </Marker>
        </MapView>
        <DismissKeyboard>
          <View style={styles.content}>
            <TextInput label="Straße, Hausnummer, Zusätze" />

            <View style={styles.address}>
              <TextInput
                label="Postleitzahl"
                keyboardType="numeric"
                style={styles.street}
              />
              <TextInput label="Stadt" value="Berlin" disabled />
            </View>

            <Button
              mode="outlined"
              icon="map-search"
              onPress={onSearch}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Adresse suchen
            </Button>

            <Button
              mode="contained"
              icon="map-marker-plus"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
              disabled
            >
              Adresse speichern
            </Button>
          </View>
        </DismissKeyboard>
      </SafeAreaView>
    </FormProvider>
  );
};
