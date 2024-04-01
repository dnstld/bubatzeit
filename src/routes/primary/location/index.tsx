import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import FormInput from '../../../components/form-input';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';

type FormValues = {
  street: string;
  postalCode: string;
  city: string;
};

const coordinates = {
  latitude: 52.52,
  longitude: 13.405,
};

export default function LocationScreen() {
  const form = useForm<FormValues>();

  const { colors } = useTheme();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
  });

  const onSearch = () => {
    const street = form.getValues('street');
    const postalCode = form.getValues('postalCode');
    const city = form.getValues('city');
    console.log(`${street}, ${postalCode} ${city}`);
  };

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
        >
          <Marker coordinate={coordinates}>
            <WeedSvg color={colors.primary} />
          </Marker>
        </MapView>
        <DismissKeyboard>
          <View style={styles.content}>
            <FormInput label="Straße, Hausnummer, Zusätze" name="street" />

            <View style={styles.address}>
              <FormInput
                label="Postleitzahl"
                name="postalCode"
                keyboardType="numeric"
                style={styles.street}
              />
              <FormInput label="Stadt" name="city" value="Berlin" disabled />
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
}
