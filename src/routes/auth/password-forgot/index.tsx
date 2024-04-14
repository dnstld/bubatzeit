import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { styles } from './styles';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { EmailInput } from '../../../components/email-input';
import { ScreenProps as AuthScreenProps } from '../__layout/types';
import AuthHeader from '../../../components/auth-header';

type FormValues = {
  email: string;
  clubName: string;
};

export const PasswordForgot = ({
  navigation,
}: AuthScreenProps<'PasswordForgot'>) => {
  const form = useForm<FormValues>();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('Submitted Data:', data);
    navigation.navigate('Primary', { screen: 'Home' });
  });

  return (
    <DismissKeyboard>
      <FormProvider {...form}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <AuthHeader
              title="Password zurücksetzen"
              subtitle="Trage deine E-Mail ein und wir schicken dir einen Link zum Ändern
              deines Passwortes."
            />

            <EmailInput />

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
};
