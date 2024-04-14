import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import AuthHeader from '../../../components/auth-header';
import DismissKeyboard from '../../../components/dismiss-keyboard';
import { PasswordInput } from '../../../components/password-input';
import { ScreenProps as AuthScreenProps } from '../__layout/types';

type FormValues = {
  email: string;
  clubName: string;
};
export const ResetPassword = ({
  navigation,
}: AuthScreenProps<'ResetPassword'>) => {
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
            <AuthHeader title="Passwort zurücksetzen" />

            <PasswordInput />
            <PasswordInput />

            <Button
              mode="contained"
              icon="login"
              onPress={onSubmit}
              loading={form.formState.isSubmitting}
              style={styles.submitButton}
            >
              Anmelden
            </Button>

            <Button onPress={onSubmit}>Password vergessen</Button>
            <Button onPress={onSubmit}>Melde hier deinen Club an</Button>
          </View>
        </SafeAreaView>
      </FormProvider>
    </DismissKeyboard>
  );
};
