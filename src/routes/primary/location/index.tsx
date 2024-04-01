import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import FormInput from '../../../components/form-input';
import WeedSvg from '../../../components/weed-svg';
import { useTheme } from '../../../theme';
import DismissKeyboard from '../../../components/dismiss-keyboard';

type FormValues = {
  email: string;
  clubName: string;
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

  return (
    <DismissKeyboard>
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
          <View style={styles.content}>
            <FormInput label="Street" name="street" />
            <FormInput label="Number" name="number" />

            <View style={styles.address}>
              <FormInput
                label="Postal code"
                name="postalCode"
                style={styles.street}
              />
              <FormInput label="City" name="city" value="Berlin" disabled />
            </View>

            <Button
              mode="contained"
              icon="account-check"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Save
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
}
