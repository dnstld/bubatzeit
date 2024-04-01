import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import FormInput from '../../../components/form-input';

type FormValues = {
  email: string;
  clubName: string;
};

export default function PasswordForgottenScreen({ navigation }) {
  const form = useForm<FormValues>();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
    navigation.navigate('Home');
  });

  return (
    <DismissKeyboard>
      <FormProvider {...form}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text>
              Trage deine E-Mail ein und wir schicken dir einen Link zum Ändern
              deines Passwortes.
            </Text>

            <FormInput
              label="Email"
              name="email"
              keyboardType="email-address"
              rules={{
                pattern: {
                  value: /^[^\s@]+@[^\s@]+$/gi,
                  message: 'Insert a valid email',
                },
              }}
            />

            <Button
              mode="contained"
              icon="send"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Absenden
            </Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
}
